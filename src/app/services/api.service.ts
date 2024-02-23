import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'https://localhost:7158/api/';
 
  constructor(private http: HttpClient) {}
 
  endpoints: { [endpoint: string]: string | any } = {
    usersList: '/api/Registration',
    addUser: '/api/Registration',
    userDetails: (id: any) => `/api/Registration/${id}`,
    editUser: (id: any ) => `/api/Registration/${id}`,        
    deleteUser: (id: any) => `/api/Registration/${id}`,
    login: '/api/Authentication/login',

  };
 
  request(
    url: endpointType,
    method: string,
    payload?: object,
    urlParams?: any
  ) {
    const finalUrl = !urlParams
      ? this.endpoints[url]
      : this.endpoints[url](urlParams);
 
    return !payload
      ? this.http.request(method, finalUrl)
      : this.http.request(method, finalUrl, { body: payload });
  }
}
 
export type endpointType =
  | 'usersList'
  | 'addUser'
  | 'userDetails'
  | 'editUser'
  | 'deleteUser'
  | 'login'
 ;