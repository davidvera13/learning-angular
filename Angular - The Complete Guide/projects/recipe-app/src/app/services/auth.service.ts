import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {AuthResponse} from "../model/authResponse.model";
import {BehaviorSubject, catchError, Subject, tap, throwError} from "rxjs";
import {User} from "../model/user.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signUpUrl: string;
  loginUrl: string;
  // user: Subject<User>;
  user: BehaviorSubject<User | any >;
  private tokenExpirationTimer: any;


  constructor(private httpClient: HttpClient,
              private router: Router) {
    this.signUpUrl = "https://identitytoolkit.googleapis.com/" +
      "v1/accounts:signUp?key=AIzaSyAJ4CKfwPQhQCvxKdIuD0sAoQcbW00vZzw";
    this.loginUrl = "https://identitytoolkit.googleapis.com/" +
      "v1/accounts:signInWithPassword?key=AIzaSyAJ4CKfwPQhQCvxKdIuD0sAoQcbW00vZzw";
    // A behavior subject is a subject. The difference is that behavior subject also gives subscribers immediate access
    // to the previously emitted value, even if they haven't subscribed at the point of time that value was emitted.
    // That means we can get access to the currently active user even if we only subscribe after that user has been emitted.
    this.user = new BehaviorSubject<User | null>(null);
  }

  signUp(email: string, password: string) {
   return this.httpClient
     .post<AuthResponse>(this.signUpUrl, {
       email: email,
       password: password,
       returnSecureToken: true
     })
     // let's handle exceptions here
     .pipe(
       catchError(this.handleError),
       tap(response =>
         this.handleAuth(
          response.email,
           response.localId,
           response.idToken,
           +response.expiresIn)))
  }

  login(email: string, password: string) {
    return this.httpClient
      .post<AuthResponse>(this.loginUrl, {
        email: email,
        password: password,
        returnSecureToken: true
      })
      // let's handle exceptions here
      .pipe(catchError(this.handleError),
        tap(response =>
          this.handleAuth(
            response.email,
            response.localId,
            response.idToken,
            +response.expiresIn)));
  }

  logout() {
    this.user.next(null);
    this.router.navigate(["./auth"]).then();
    localStorage.removeItem('user');
    if(this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogin() {
    if(localStorage.getItem('user') != null) {
      const user = JSON.parse(localStorage.getItem('user')!);
      const loadedUser = new User(user.email, user.id, user._token, user._tokenExpirationDate)

      if (loadedUser.token) {
        console.log("Token is valid");
        // we have to calculate remaining time before expiration
        this.autoLogout(new Date(user._tokenExpirationDate).getTime() - new Date().getTime())
        this.user.next(user);
      }
    }
    return;
  }

  autoLogout(expirationDuration: number) {
    // millis
    console.log(+expirationDuration + " ms remaining");
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration); // 2000 for test purpose

  }


  private handleAuth(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    // we clear local storage on login if data are stored
    this.autoLogout(+expiresIn * 1000);
    localStorage.setItem("user", JSON.stringify(user));
  }
  private handleError(error:HttpErrorResponse) {
    let errorMessage = "Oops, an error occured";

    switch (error.error.error.message) {
      // https://firebase.google.com/docs/reference/rest/auth?hl=en#section-sign-in-email-password
      case 'EMAIL_NOT_FOUND':
        errorMessage  += ": Email not found in database";
        break;
      case 'INVALID_PASSWORD':
        errorMessage  += ": invalid password";
        break;
      case 'USER_DISABLED':
        errorMessage  += ": account is disabled";
        break;
      // https://firebase.google.com/docs/reference/rest/auth?hl=en#section-create-email-password
      case 'EMAIL_EXISTS':
        errorMessage  += ": Email already exists in database";
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMessage  += ": Operation is not allowed";
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage  += ": Too many attempts ... try later";
        break;
    }
    return throwError(() => new Error(errorMessage));
  }
}
