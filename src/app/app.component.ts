import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MySkills';
  isAuthenticated: boolean = false;
  showSidebar: boolean = true;

  constructor(location: Location, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is the login page
        this.showSidebar = !event.url.includes('#/login'); // Modify this condition based on your login page route
      }
    });
  }
}
