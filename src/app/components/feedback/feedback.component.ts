import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  nickname: string = '';
  stars: number = 0;
  textFeedback: string = '';
  images: File[] = [];
  files: File[] = [];
  overallExperience: string = '';
  improvement: string = '';

  submitFeedback() {
    // Handle form submission, e.g., sending feedback to backend
    console.log('Feedback submitted:', {
      nickname: this.nickname,
      stars: this.stars,
      textFeedback: this.textFeedback,
      images: this.images,
      files: this.files,
      overallExperience: this.overallExperience,
      improvement: this.improvement
    });
  }

  onImageUpload(event: any) {
    this.images = event.target.files;
  }

  onFileUpload(event: any) {
    this.files = event.target.files;
  }

  like() {
    this.overallExperience = 'Like';
  }

  dislike() {
    this.overallExperience = 'Dislike';
  }

  setStars(rating: number) {
    this.stars = rating;
  }
}
