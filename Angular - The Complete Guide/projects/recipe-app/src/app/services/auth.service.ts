import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthResponse} from "../model/authResponse.model";
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "https://identitytoolkit.googleapis.com/" +
      "v1/accounts:signUp?key=AIzaSyAJ4CKfwPQhQCvxKdIuD0sAoQcbW00vZzw"
  }

  signUp(email: string, password: string) {
   return this.httpClient
     .post<AuthResponse>(this.baseUrl, {
       email: email,
       password: password,
       returnSecureToken: true
     })
     // let's handle exceptions here
     .pipe(catchError(error => {
       let errorMessage = "Oops, an error occured";
       if(!error.error || !error.error.error.message) {
         return throwError(() => new Error(errorMessage));
       }
       switch (error.error.error.message) {
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
     }));
  }

  signIn() {}
}
