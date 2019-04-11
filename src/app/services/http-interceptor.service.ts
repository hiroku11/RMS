import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpInterceptorService {

  constructor(private userService: UserService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).map(event => {
      const tokenExp = this.userService.checkTokenExpiry(true);
      if (tokenExp && req.url.indexOf('p/user/reset-user-password') === -1) {
        this.userService.logOut();
      }
      if (event instanceof HttpResponse) {
        const token = event.headers.get('X-AUTH-TOKEN');
        if (token) {
          this.userService.authToken = event.headers.get('X-AUTH-TOKEN');
          localStorage.setItem('rmsAuthToken', event.headers.get('X-AUTH-TOKEN'));
        }
      }
      return event;
    });
  }
}
