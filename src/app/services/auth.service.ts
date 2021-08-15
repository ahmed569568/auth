import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private _registerUrl = "http://localhost:8000/auth/register";
  private _loginUrl = "http://localhost:8000/auth/login";
  // private _registerUrl = "https://dev.api.vi.egdev.afaqy.co/auth/register";
  // private _loginUrl = "https://dev.api.vi.egdev.afaqy.co/auth/login";

  constructor(private http: HttpClient, private _router: Router) { }
  // registerUser(user: any) {
  //   return this.http.post<any>(this._registerUrl, user)
  // }
  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user)
  }
  loggedIn() {
    return !!localStorage.getItem('token')
  }
  logOutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }
  getToken() {
    return localStorage.getItem('token')
  }
}
