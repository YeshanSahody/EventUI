import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';


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
    private storageService: StorageService,
    public authService: AuthService
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
    this.authService.logout();
  }
}
