import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  applicationName: string = 'sd events';
  firstName: string = '';
  lastName: string = '';
  constructor(
  ) { }

  ngOnInit() {
    this.checkIfLoggedIn();

    this.firstName = "Ekantesh";


    // Subscribe to the login status changes
    // this.authService.getUserLoginStatus().subscribe((loggedIn) => {
    //   if (!loggedIn) {
    //     // Clear the user details if not logged ins
    //     this.firstName = '';
    //     this.lastName = '';
    //   }
    // });
  }

  checkIfLoggedIn() {
  }

  logout() {
  }
}
