import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  authService = inject(AuthService);
  router = inject(Router);

  canActivate(): boolean {
    if(this.authService.isLoggedIn() || localStorage.getItem("loginStatus") === "authenticated") {
      return true;
    }
    else {
      this.router.navigate(['/']);
      return false;
    }
  }

}
