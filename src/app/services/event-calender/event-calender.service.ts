

import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ICalendarEvent } from '../../model/event.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class EventCalendarService  {
  private http = inject(HttpClient)

  getAllEventDetails(): Observable<ICalendarEvent[]> {
    return this.http.get<ICalendarEvent[]>('apiurl');
  }
}
