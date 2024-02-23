import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '';
  isAuthenticated: boolean = false;
  showSidebar: boolean = true;

  constructor(private location: Location, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is the login page or register page
        const currentUrl = this.location.path();
        this.showSidebar = !(currentUrl.includes('/login') || currentUrl.includes('/sign-up') || currentUrl.includes('/forgetpassword')) ;
      }
    });
  }
}
