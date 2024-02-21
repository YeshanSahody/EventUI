import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://localhost:7158/api/';

  constructor(private http: HttpClient) { }

  endpoints: { [endpoint: string]: string | any } = {
    login: `${this.baseUrl}Authentication/login`
  }

  request(
    url: endpointType,
    method: string,
    payload?: object,
    urlParams?: any
  ){
    const finalUrl = !urlParams
      ? this.endpoints[url]
      : this.endpoints[url](urlParams);

    return !payload
      ? this.http.request(method, finalUrl)
      : this.http.request(method, finalUrl, { body: payload });
  }
}


export type endpointType = 
'login';
