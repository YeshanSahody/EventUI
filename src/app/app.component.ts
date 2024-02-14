import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MySkills';
  isAuthenticated: boolean = false;

  constructor(location: Location, private router: Router,) {
    this.router.events.subscribe(() => {
      this.isAuthenticated = location.path() !== '' ? true : false;
    });
  }
}
