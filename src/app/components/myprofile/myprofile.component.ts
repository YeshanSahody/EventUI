import { Component, OnInit } from '@angular/core';

interface UserProfile {
  name: string;
  position: string;
  username: string;
  email: string;
  bio?: string;
  pictureUrl?: string;
}

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  userProfile: UserProfile = {
    name: 'Abdurrahman Gurib',
    position: 'Software Engineer',
    username: 'Abdurrahman Gurib',
    email: 'abdurrahman.gurib@sdworx.com',
    bio: 'I am a software engineer passionate about building great web applications.',
    pictureUrl: '../../../assets/images/spark/Motion-1.jpg' // Provide a default picture URL
  };

  editMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  saveProfile() {
    // Logic to save profile changes
    console.log('Profile saved:', this.userProfile);
    this.editMode = false;
  }

  onPictureChange(event: any) {
    const file = event.target.files[0];
    // Perform upload and update picture URL logic here
    // For demonstration, let's assume we update the picture URL immediately
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.userProfile.pictureUrl = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
 