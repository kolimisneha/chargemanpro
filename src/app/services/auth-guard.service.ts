import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Authentication } from "./authentication.service";

@Injectable({providedIn: 'root'})
export class LoginAuthGuard implements CanActivate {
  constructor(private authService: Authentication, private router: Router) {}

  async canActivate(): Promise<boolean> {
    // Check persistent login flag directly
    const isLoggedIn = await this.authService.isLoggedIn();
    if (!isLoggedIn) {
      this.router.navigate(['login']);
    }
    return isLoggedIn;
  }
}