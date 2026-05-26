import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Authentication } from "./authentication.service";

@Injectable({providedIn: 'root'})
export class LoginAuthGuard  implements CanActivate {

    constructor(private authService: Authentication) {

    }

    canActivate() {
            return this.authService.isAuthenticated();
    }
}