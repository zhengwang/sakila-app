import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const bear_token = localStorage.getItem('apiToken');

    request = request.clone({
      url: request.url
    });

    if (bear_token) {
      request = request.clone({
        responseType: 'json',
        setHeaders: {
          Authorization: `Bearer ${bear_token}`
        }
      });
    }

    return next.handle(request);
  }
}
