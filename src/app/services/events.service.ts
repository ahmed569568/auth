import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  // private _eventsUrl = "http://localhost:3000/products";

  constructor(private http: HttpClient) { }
  getEvents() {
    // return this.http.get<any>(this._eventsUrl)
  }
}
