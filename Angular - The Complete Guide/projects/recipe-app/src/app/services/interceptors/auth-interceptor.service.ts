import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from "@angular/common/http";
import {exhaustMap, Observable, take} from "rxjs";
import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.user
      // we want to take 1 value from subscription and then unsubscribe
      .pipe(
        take(1),
        // we wait to completion
        exhaustMap(user => {
          if(user != null) {
            const updatedRequest = req.clone({ params: new HttpParams().set('auth', user!.token)});
            return next.handle(updatedRequest);
          }
          return next.handle(req);
        }));
  }
}
