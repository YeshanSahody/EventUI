import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { UserResponse } from 'src/app/models/user/user-response';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private jwtHelperService = inject(JwtHelperService);
  private router = inject(Router);
  private storageService = inject(StorageService)
  private loggedInSubject = new BehaviorSubject<boolean>(false);

  login(result: { [key: string]: any }): void {

    const decodedToken = this.jwtHelperService.decodeToken(result['token']);
    if (decodedToken) {
      const userObject: UserResponse = {
        userID: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
        username: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
        password: decodedToken['password'],
        role: decodedToken['role'],
        email: decodedToken['email'],
        firstName: decodedToken['firstName'],
        lastName: decodedToken['lastName'],
        dateOfBirth: new Date(decodedToken['dateOfBirth']),
        phone: decodedToken['phone'],
        avatar: decodedToken['avatar']
      };
      this.storageService.set('token', result['token']);
      this.storageService.set('user', userObject);
      if (userObject.role as string === 'Administrator') {
        this.router.navigate(['/admin-dashboard']);
        this.loggedInSubject.next(true);
      }
      else {
        this.router.navigate(['/home']);
        this.loggedInSubject.next(true);
      }
    }
  }

  logout(): void {
    this.storageService.clear();
    this.loggedInSubject.next(false);
    this.router.navigate(['/']);

  }

  getUserLoginStatus(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }
}
