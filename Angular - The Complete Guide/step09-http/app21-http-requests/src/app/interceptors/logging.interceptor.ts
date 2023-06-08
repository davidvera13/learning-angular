import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler):
    Observable<HttpEvent<unknown>> {
    console.log("LOGGER TRIGGERED")
    console.log("### url ", request.url);
    console.log("### method ", request.method);
    console.log("### updated headers ", request.headers);
    return next.handle(request);
  }
}
