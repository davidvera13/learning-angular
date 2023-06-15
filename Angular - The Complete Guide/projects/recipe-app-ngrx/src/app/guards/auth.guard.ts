import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable, take, tap} from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // check if user is authorized, we will use urlTree for redirection
    return this.authService
      .user
      .pipe(
        take(1), // we must be sure the call will be made once only... auto unsubscribe
        map(user => {
          const isAuth =  !!user
          if(isAuth)
            return true;
          return this.router.createUrlTree(['./auth'])
        }));
  }

  // old implementation approach ...
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot):
  //   Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   // check if user is authorized, we will use urlTree for redirection
  //   return this.authService
  //     .user
  //     .pipe(
  //       map(user => {
  //         return !!user
  //       }),
  //       tap(isAuth => {
  //         if(isAuth)
  //           this.router.navigate(['./auth']).then()
  //       }));
  // }

}
