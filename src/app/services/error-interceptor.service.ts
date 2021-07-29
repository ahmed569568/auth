// import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { observable, Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators'
// import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class ErrorInterceptorService implements HttpInterceptor {

//   constructor(private _authService: AuthService) { }

//   intercept(req:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>{
//     return next.handle(req).pipe(
//       catchError((error: HttpErrorResponse) => {
//         if ([401,403].indexOf(error.status) !== -1) {
//           this._authService.logOutUser()
//         }
//       })
//     )
//   }
// }
