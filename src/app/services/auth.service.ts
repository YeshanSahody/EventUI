import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { UserResponse } from '../../app/model/user-response';

@Injectable({
  providedIn: 'root'
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
        Id: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
        UserName: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
        Password: decodedToken['password'],
        Email: decodedToken['email'],
        role: decodedToken['role'],
        FirstName: decodedToken['firstName'],
        LastName: decodedToken['lastName'],
      };
      this.storageService.set('token', result['token']);
      this.storageService.set('user', userObject);
      if (userObject.role as string === 'Admin') {
        this.router.navigate(['/dashboard']);
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
