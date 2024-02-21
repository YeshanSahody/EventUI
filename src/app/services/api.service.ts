import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'https://localhost:7008/api/';
 
  constructor(private http: HttpClient) {}
 
  endpoints: { [endpoint: string]: string | any } = {
    usersList: `${this.baseUrl}users`,
    addUser: `${this.baseUrl}users`,
    userDetails: (id: string) => `${this.baseUrl}users/${id}`,
    editUser: (id: string) => `${this.baseUrl}users/${id}`,
    deleteUser: (id: string) => `${this.baseUrl}users/${id}`,
    login: `${this.baseUrl}login`,
    coursesList: `${this.baseUrl}course`,
    addCourse: `${this.baseUrl}course`,
    coursesEnrolledList: (userId: string) =>
      `${this.baseUrl}usercourse/${userId}`,
    courseTrainings: (courseId: string) =>
      `${this.baseUrl}coursetraining/${courseId}`,
    courseDetails: (id: string) => `${this.baseUrl}course/${id}`,
    editCourse: (id: string) => `${this.baseUrl}course/${id}`,
    deleteCourse: (id: string) => `${this.baseUrl}course/${id}`,
    trainingsList: `${this.baseUrl}trainings`,
    coachingsList: `${this.baseUrl}coaching`,
    addCoaching: `${this.baseUrl}coaching`,
    coachingDetails: (id: string) => `${this.baseUrl}coaching/${id}`,
    editCoaching: (id: string) => `${this.baseUrl}coaching/${id}`,
    deleteCoaching: (id: string) => `${this.baseUrl}coaching/${id}`,
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
  | 'coursesList'
  | 'addCourse'
  | 'coursesEnrolledList'
  | 'courseTrainings'
  | 'courseDetails'
  | 'editCourse'
  | 'deleteCourse'
  | 'trainingsList'
  | 'coachingsList'
  | 'addCoaching'
  | 'coachingDetails'
  | 'editCoaching'
  | 'deleteCoaching';