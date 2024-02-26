import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IEventModels } from '../models/eventRegistrationModels';
 
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'https://localhost:7158/api';
    
  constructor(private http: HttpClient) {}
 
  endpoints: { [endpoint: string]: string | any } = {
    addEvent: `${this.baseUrl}/eventRegistration/addEvent`,
    viewAllEvent: `${this.baseUrl}/eventRegistration/viewAllEvent`,
    login: `${this.baseUrl}/Authentication/login`
  };

 getEvents(): Observable<any>{
  return this.http.get(this.endpoints['viewAllEvent']);
 }

  request(
    url: endpointType,
    method: string,
    payload?: object,
    urlParams?: any
  ) {
    const finalUrl = !urlParams
      ? this.endpoints[url]
      : this.endpoints[url](urlParams);
      
      console.log(payload);
    return !payload
      ? this.http.request(method, finalUrl)
      : this.http.request(method, finalUrl, {body : payload});
  }
}
 
export type endpointType = 'addEvent' | 'eventDetails' | 'viewAllEvent' | 'login';
 
