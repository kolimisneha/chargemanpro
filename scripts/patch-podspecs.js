const fs = require('fs');
const path = require('path');

const privacyManifestContent = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>NSPrivacyTracking</key>
  <false/>
  <key>NSPrivacyTrackingDomains</key>
  <array/>
  <key>NSPrivacyCollectedDataTypes</key>
  <array/>
  <key>NSPrivacyAccessedAPITypes</key>
  <array>
    <dict>
      <key>NSPrivacyAccessedAPIType</key>
      <string>NSPrivacyAccessedAPICategoryFileTimestamp</string>
      <key>NSPrivacyAccessedAPITypeReasons</key>
      <array>
        <string>C617.1</string>
        <string>3B52.1</string>
      </array>
    </dict>
    <dict>
      <key>NSPrivacyAccessedAPIType</key>
      <string>NSPrivacyAccessedAPICategorySystemBootTime</string>
      <key>NSPrivacyAccessedAPITypeReasons</key>
      <array>
        <string>35F9.1</string>
      </array>
    </dict>
    <dict>
      <key>NSPrivacyAccessedAPIType</key>
      <string>NSPrivacyAccessedAPICategoryDiskSpace</string>
      <key>NSPrivacyAccessedAPITypeReasons</key>
      <array>
        <string>E174.1</string>
      </array>
    </dict>
    <dict>
      <key>NSPrivacyAccessedAPIType</key>
      <string>NSPrivacyAccessedAPICategoryUserDefaults</string>
      <key>NSPrivacyAccessedAPITypeReasons</key>
      <array>
        <string>CA92.1</string>
      </array>
    </dict>
  </array>
</dict>
</plist>
`;

const capacitorIosDir = path.join(__dirname, '..', 'node_modules', '@capacitor', 'ios');

// 1. Write PrivacyInfo.xcprivacy files
const capacitorPrivacyPath = path.join(capacitorIosDir, 'Capacitor', 'PrivacyInfo.xcprivacy');
const cordovaPrivacyPath = path.join(capacitorIosDir, 'CapacitorCordova', 'PrivacyInfo.xcprivacy');

console.log(`Writing PrivacyInfo.xcprivacy to: ${capacitorPrivacyPath}`);
fs.writeFileSync(capacitorPrivacyPath, privacyManifestContent, 'utf8');

console.log(`Writing PrivacyInfo.xcprivacy to: ${cordovaPrivacyPath}`);
fs.writeFileSync(cordovaPrivacyPath, privacyManifestContent, 'utf8');

// 2. Patch Capacitor.podspec
const capacitorPodspecPath = path.join(capacitorIosDir, 'Capacitor.podspec');
if (fs.existsSync(capacitorPodspecPath)) {
  let content = fs.readFileSync(capacitorPodspecPath, 'utf8');
  const targetStr = "s.resources = ['Capacitor/Capacitor/assets/native-bridge.js']";
  const replacementStr = "s.resources = ['Capacitor/Capacitor/assets/native-bridge.js', 'Capacitor/PrivacyInfo.xcprivacy']";
  
  if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync(capacitorPodspecPath, content, 'utf8');
    console.log('Successfully patched Capacitor.podspec');
  } else {
    console.warn('Could not find target resources string in Capacitor.podspec');
  }
} else {
  console.error(`Capacitor.podspec not found at ${capacitorPodspecPath}`);
}

// 3. Patch CapacitorCordova.podspec
const cordovaPodspecPath = path.join(capacitorIosDir, 'CapacitorCordova.podspec');
if (fs.existsSync(cordovaPodspecPath)) {
  let content = fs.readFileSync(cordovaPodspecPath, 'utf8');
  const targetStr = 's.framework    = "WebKit"';
  const replacementStr = 's.framework    = "WebKit"\n  s.resources    = [\'CapacitorCordova/PrivacyInfo.xcprivacy\']';
  
  if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync(cordovaPodspecPath, content, 'utf8');
    console.log('Successfully patched CapacitorCordova.podspec');
  } else {
    console.warn('Could not find framework WebKit string in CapacitorCordova.podspec');
  }
} else {
  console.error(`CapacitorCordova.podspec not found at ${cordovaPodspecPath}`);
}

console.log('Patching process completed.');
