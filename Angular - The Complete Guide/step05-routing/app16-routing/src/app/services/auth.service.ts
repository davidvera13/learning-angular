import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {UrlTree} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean;

  constructor() {
    this.isLoggedIn = false;
  }

  isAuthenticated() {
    return new Promise((resolve, reject) =>
      setTimeout(() => resolve(this.isLoggedIn) , 800))
  }

  login(): void {
    this.isLoggedIn = true;
  }
  logout(): void {
    this.isLoggedIn = false;
  }
}
