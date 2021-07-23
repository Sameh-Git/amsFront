import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BasicAuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
     //if (sessionStorage.getItem('username') && sessionStorage.getItem('basicauth')
     if (sessionStorage.getItem('username') && sessionStorage.getItem('bearerToken'))
     {
      req = req.clone({
        setHeaders: {
         // Authorization: sessionStorage.getItem('basicauth')
         Authorization: sessionStorage.getItem('bearerToken')
        }
      })
    }
    return next.handle(req);
  }
}
