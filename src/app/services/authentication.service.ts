import { Injectable } from "@angular/core";
import { Platform } from "@ionic/angular";
import { BehaviorSubject } from "rxjs";
import { Utils } from "./utils.service";
import * as constants from '../constants';

@Injectable({providedIn: 'root'})
export class Authentication {
    authState = new BehaviorSubject(false);
    authReady: Promise<void>;
    private _resolveAuthReady: () => void;
    LOGIN_FLAG_KEY = 'IS_USER_LOGGEDIN';

    constructor(private platform: Platform, private utils: Utils) {
        this.authReady = new Promise((resolve) => {
            this._resolveAuthReady = resolve;
        });
        this.platform.ready().then(() => {
            this.ifLoggedIn()
        })
    }

    async ifLoggedIn() {
        const localFlag = localStorage.getItem(this.LOGIN_FLAG_KEY);
        if (localFlag === '1') {
            this.authState.next(true);
            this._resolveAuthReady();
            return;
        }
        try {
            const response = await this.utils.getStoredDetails(constants.KEYS.IS_USER_LOGGED_IN);
            if (response.value !== null) {
                localStorage.setItem(this.LOGIN_FLAG_KEY, '1');
                this.authState.next(true);
            } else {
                this.authState.next(false);
            }
        } catch(e) {
            this.authState.next(false);
        }
        this._resolveAuthReady();
    }

    setLoginFlag() {
        localStorage.setItem(this.LOGIN_FLAG_KEY, '1');
        this.utils.storeDetails(constants.KEYS.IS_USER_LOGGED_IN, '1').then(() => {
            this.authState.next(true);
        })
    }

    setLogout() {
        localStorage.removeItem(this.LOGIN_FLAG_KEY);
        this.utils.removeStoredDetails(constants.KEYS.IS_USER_LOGGED_IN).then(() => {
            this.authState.next(false);
        })
    }

    isAuthenticated() {
        return this.authState.value;
    }
}