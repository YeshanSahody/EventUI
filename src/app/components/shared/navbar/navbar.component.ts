import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  applicationName: string = 'sd events';
  firstName: string = '';
  isLoggedIn: boolean = false; // Add this line
  constructor() { }

  ngOnInit() {
    this.checkIfLoggedIn();

    this.firstName = "AI Dev-X";
  }

  checkIfLoggedIn() {
    // Implement your logic here to check if the user is logged in
    // For example, you might use authService or some other service to check the login status
    // If the user is logged in, set isLoggedIn to true
    // If the user is not logged in, set isLoggedIn to false
    // For demo purpose, I'll set it to true
    this.isLoggedIn = false; // Remove this line and replace it with your actual logic
  }

  logout() {
    // Implement logout logic here
  }
}
