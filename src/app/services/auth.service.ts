import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private loggedIn: boolean = false;

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setLoggedIn(loginStatus: boolean) {
    this.loggedIn = loginStatus;
  }

}
