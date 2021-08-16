import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { Injectable } from '@angular/core'

import { AuthService } from './auth.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.authService.getAccessToken();
    let authReq = req.clone({ 
      headers: req.headers.set('authorization', 'Bearer ' + accessToken)
     });

     return next.handle(authReq);
  }

}