import sys
import os
import zipfile
import shutil
import struct
import subprocess
import tempfile

def patch_elf_16kb(so_path):
    patched = 0
    with open(so_path, 'r+b') as f:
        ident = f.read(16)
        if ident[:4] != b'\x7fELF':
            return False, "not an ELF file"

        is_64 = ident[4] == 2
        endian = '<' if ident[5] == 1 else '>'

        if is_64:
            f.seek(32)
            e_phoff = struct.unpack(endian + 'Q', f.read(8))[0]
            f.seek(54)
            e_phentsize = struct.unpack(endian + 'H', f.read(2))[0]
            e_phnum = struct.unpack(endian + 'H', f.read(2))[0]
        else:
            f.seek(28)
            e_phoff = struct.unpack(endian + 'I', f.read(4))[0]
            f.seek(42)
            e_phentsize = struct.unpack(endian + 'H', f.read(2))[0]
            e_phnum = struct.unpack(endian + 'H', f.read(2))[0]

        for i in range(e_phnum):
            ph_offset = e_phoff + i * e_phentsize
            f.seek(ph_offset)

            if is_64:
                p_type = struct.unpack(endian + 'I', f.read(4))[0]
                if p_type != 1:
                    continue
                f.seek(ph_offset + 48)
                p_align = struct.unpack(endian + 'Q', f.read(8))[0]
                if p_align == 0x1000:
                    f.seek(ph_offset + 48)
                    f.write(struct.pack(endian + 'Q', 0x4000))
                    patched += 1
            else:
                p_type = struct.unpack(endian + 'I', f.read(4))[0]
                if p_type != 1:
                    continue
                f.seek(ph_offset + 28)
                p_align = struct.unpack(endian + 'I', f.read(4))[0]
                if p_align == 0x1000:
                    f.seek(ph_offset + 28)
                    f.write(struct.pack(endian + 'I', 0x4000))
                    patched += 1

    return True, f"patched {patched} PT_LOAD segment(s)"


def _read_varint(data, pos):
    value = 0
    shift = 0
    while pos < len(data):
        byte = data[pos]
        value |= (byte & 0x7F) << shift
        shift += 7
        pos += 1
        if not (byte & 0x80):
            return value, pos
    return None, pos


def has_field(data, field_num):
    pos = 0
    while pos < len(data):
        tag = data[pos]
        num = tag >> 3
        wire = tag & 0x07
        pos += 1
        if num == field_num:
            return True
        if wire == 0:
            _, pos = _read_varint(data, pos)
        elif wire == 1:
            pos += 8
        elif wire == 2:
            length, pos = _read_varint(data, pos)
            if length is None:
                break
            pos += length
        elif wire == 5:
            pos += 4
        else:
            break
    return False


def patch_bundleconfig_pb(pb_path):
    with open(pb_path, 'rb') as f:
        data = bytearray(f.read())

    # Only check top-level fields by proper parsing
    already_has = has_field(data, 5)

    if already_has:
        return False, "already has optimizations field, skipping"

    # Append field 5 = Optimizations -> field 2 = UncompressNativeLibraries -> field 1 = Alignment = 16K
    # Encoded: 2a 04 12 02 08 02
    alignment_field = bytes([0x2A, 0x04, 0x12, 0x02, 0x08, 0x02])
    new_data = data + alignment_field

    with open(pb_path, 'wb') as f:
        f.write(new_data)

    return True, "added optimizations field with PAGE_ALIGNMENT_16K"


def patch_aab(aab_path, keystore, storepass, keyalias, keypass):
    print(f"Patching: {aab_path}")

    tmpdir = tempfile.mkdtemp(prefix='aab_patch_')
    try:
        with zipfile.ZipFile(aab_path, 'r') as z:
            z.extractall(tmpdir)

        # Patch .so files
        so_files = []
        for root, dirs, files in os.walk(tmpdir):
            for f in files:
                if f.endswith('.so'):
                    so_files.append(os.path.join(root, f))

        print(f"Found {len(so_files)} .so file(s)")
        for so in so_files:
            rel = os.path.relpath(so, tmpdir)
            success, msg = patch_elf_16kb(so)
            print(f"  {rel}: {msg}")

        # Patch BundleConfig.pb
        pb_path = os.path.join(tmpdir, 'BundleConfig.pb')
        if os.path.exists(pb_path):
            success, msg = patch_bundleconfig_pb(pb_path)
            print(f"  BundleConfig.pb: {msg}")
        else:
            print("  BundleConfig.pb not found, creating minimal one")
            pb_dir = os.path.dirname(pb_path)
            os.makedirs(pb_dir, exist_ok=True)
            with open(pb_path, 'wb') as f:
                f.write(bytes([0x2A, 0x04, 0x12, 0x02, 0x08, 0x02]))
            print("  Created BundleConfig.pb with PAGE_ALIGNMENT_16K")

        # Repack AAB
        os.remove(aab_path)
        with zipfile.ZipFile(aab_path, 'w', zipfile.ZIP_DEFLATED) as z:
            for root, dirs, files in os.walk(tmpdir):
                for f in files:
                    file_path = os.path.join(root, f)
                    arcname = os.path.relpath(file_path, tmpdir)
                    z.write(file_path, arcname)

        # Re-sign
        print("Re-signing AAB...")
        cmd = [
            'jarsigner', '-sigalg', 'SHA256withRSA',
            '-digestalg', 'SHA-256',
            '-keystore', keystore,
            '-storepass', storepass,
            '-keypass', keypass,
            aab_path, keyalias
        ]
        subprocess.run(cmd, check=True, capture_output=True)
        print("Re-signed successfully")
        print(f"Done: {aab_path}")

    finally:
        shutil.rmtree(tmpdir)


if __name__ == '__main__':
    if len(sys.argv) != 6:
        print("Usage: python3 patch_aab_16kb.py <aab-path> <keystore> <storepass> <keyalias> <keypass>")
        sys.exit(1)

    patch_aab(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4], sys.argv[5])
