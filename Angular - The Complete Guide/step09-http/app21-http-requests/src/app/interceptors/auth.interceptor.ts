import {Injectable} from '@angular/core';
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, tap} from 'rxjs';

/**
 * Interceptors behave like a service, it will provide
 * here shared headers among all http requests: for authentication for
 * example
 * Must be declared in app.module
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler):
    Observable<HttpEvent<unknown>> {
    console.log("Request interceptor was triggered");
    // REQUEST IS IMMUTABLE.. for modification, we must clone it
    // with an if statement, we can select where new request is used by
    console.log(request.method);
    const updatedRequest = request.clone({
      headers: request.headers.append("fromInterceptor", "I was intercepted")
    });
    // return next.handle(request);
    // We can also intercept the response
    return next.handle(updatedRequest).pipe(
      tap(event => {
        console.log("response was intercepted", event);
        if(event.type === HttpEventType.Response ) {
          console.log(event.body);
        }
      })
    );
  }
}
