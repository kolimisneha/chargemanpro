import { Injectable } from "@angular/core";
import { Platform } from "@ionic/angular";
import { BehaviorSubject } from "rxjs";
import { Utils } from "./utils.service";
import * as constants from '../constants';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Injectable({providedIn: 'root'})
export class Authentication {
    authState = new BehaviorSubject(false);
    authReady: Promise<void>;
    private _resolveAuthReady: () => void;
    LOGIN_FLAG_KEY = 'IS_USER_LOGGEDIN';
    private FLAG_FILE = 'login_flag.json';

    constructor(private platform: Platform, private utils: Utils) {
        this.authReady = new Promise((resolve) => {
            this._resolveAuthReady = resolve;
        });
        this.platform.ready().then(() => {
            this.ifLoggedIn();
            this.platform.resume.subscribe(() => {
                this.ifLoggedIn();
            });
        })
    }

    private async writeStorageFlag(): Promise<boolean> {
        try {
            await this.utils.storeDetails(constants.KEYS.IS_USER_LOGGED_IN, '1');
            return true;
        } catch (e) {
            return false;
        }
    }

    private async writeLocalFlag(): Promise<boolean> {
        try {
            localStorage.setItem(this.LOGIN_FLAG_KEY, '1');
            return true;
        } catch (e) {
            return false;
        }
    }

    private async writeFileFlag(): Promise<boolean> {
        try {
            await Filesystem.writeFile({
                path: this.FLAG_FILE,
                data: '1',
                directory: Directory.Data,
                encoding: Encoding.UTF8
            });
            return true;
        } catch (e) {
            return false;
        }
    }

    private async readStorageFlag(): Promise<string | null> {
        try {
            const response = await this.utils.getStoredDetails(constants.KEYS.IS_USER_LOGGED_IN);
            const v = response && response.value !== null && response.value !== undefined ? response.value : null;
            return v;
        } catch (e) {
            return null;
        }
    }

    private async readLocalFlag(): Promise<string | null> {
        try {
            const v = localStorage.getItem(this.LOGIN_FLAG_KEY);
            return v;
        } catch (e) {
            return null;
        }
    }

    private async readFileFlag(): Promise<string | null> {
        try {
            const result = await Filesystem.readFile({
                path: this.FLAG_FILE,
                directory: Directory.Data,
                encoding: Encoding.UTF8
            });
            const v = result && result.data !== null && result.data !== undefined ? result.data : null;
            return v;
        } catch (e) {
            return null;
        }
    }

    private async removeLocalFlag(): Promise<void> {
        try {
            localStorage.removeItem(this.LOGIN_FLAG_KEY);
        } catch (e) {
        }
    }

    private async removeFileFlag(): Promise<void> {
        try {
            await Filesystem.deleteFile({ path: this.FLAG_FILE, directory: Directory.Data });
        } catch (e) {
        }
    }

    /**
     * Checks whether a persistent login flag exists.
     * The flag is mirrored in three independent stores so that the session
     * survives even if one storage mechanism is cleared or fails on a device:
     *   1. Capacitor Storage (native SharedPreferences on Android/iOS)
     *   2. localStorage (web fallback)
     *   3. A real file in the app data directory (Filesystem plugin)
     * If the flag is found in any store, it is re-synced to the others.
     */
    async isLoggedIn(): Promise<boolean> {
        const storageVal = await this.readStorageFlag();
        const localVal = await this.readLocalFlag();
        const fileVal = await this.readFileFlag();
        const loggedIn = storageVal !== null || localVal !== null || fileVal !== null;
        if (loggedIn) {
            if (storageVal === null) { await this.writeStorageFlag(); }
            if (localVal === null) { await this.writeLocalFlag(); }
            if (fileVal === null) { await this.writeFileFlag(); }
        }
        return loggedIn;
    }

    async setLoginFlag() {
        // Write to every store independently so a failure in one
        // cannot lose the session.
        await this.writeStorageFlag();
        await this.writeLocalFlag();
        await this.writeFileFlag();
        this.authState.next(true);
    }

    async ifLoggedIn() {
        try {
            const loggedIn = await this.isLoggedIn();
            if (this.authState.value !== loggedIn) {
                this.authState.next(loggedIn);
            }
        } catch(e) {
            if (this.authState.value !== false) {
                this.authState.next(false);
            }
        }
        this._resolveAuthReady();
    }

    setLogout() {
        // Explicit user-initiated logout: wipe the persistent session.
        Promise.all([
            this.utils.removeStoredDetails(constants.KEYS.IS_USER_LOGGED_IN),
            this.removeLocalFlag(),
            this.removeFileFlag(),
        ]).then(() => {
            this.authState.next(false);
        }).catch((e) => {
            this.authState.next(false);
        });
    }

    isAuthenticated() {
        return this.authState.value;
    }
}
