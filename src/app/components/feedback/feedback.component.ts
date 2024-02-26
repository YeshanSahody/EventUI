import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  feedbackID: string = '';
  eventID: string = '';
  userID: string = '';
  DescriptionText: string = '';
  DescriptionDate: string = '';

  submitFeedback() {
    // Handle form submission, e.g., sending feedback to backend
    console.log('Feedback submitted:', {
      feedbackID: this.feedbackID,
      eventID: this.eventID,
      userID: this.userID,
      DescriptionText: this.DescriptionText,
      DescriptionDate: this.DescriptionDate
    });
  }
}
