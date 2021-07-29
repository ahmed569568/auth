import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private _authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userData: string = localStorage.getItem('userData');

    let request = req;

    if (userData != null) {
      const user = JSON.parse(userData);
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${user[this._authService.getToken()]}`
        }
      });
    }

    return next.handle(request);
  }
}
