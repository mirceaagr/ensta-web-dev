import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsServiceService {

  constructor(private http:HttpClient) {
  }

  getEvents():Observable<string[]> {
    return this.http.get<string[]>("http://localhost:3000/events")
  }
}
