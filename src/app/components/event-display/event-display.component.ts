import { Component } from '@angular/core';
import { BaseEvent } from '../../models/base-event.model';

@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.scss']
})
export class EventDisplayComponent {
  events: BaseEvent[] = [
    {
      title: 'Fun @ Worx',
      description: ' Have a good time...',
      date: 'Jan 19, 2024',
      imageUrl: 'assets/images/gaming.jpg'
      ,location: 'Event Venue 1',
      time: '10:00 AM - 2:00 PM',
      organizer: 'Organizer 1'
    },
    {
      title: 'HR Team',
      description: 'Hire mee!!...',
      date: 'Jan 25, 2024',
      imageUrl: 'assets/images/donation.jpg'
      ,location: 'Event Venue 1',
      time: '10:00 AM - 2:00 PM',
      organizer: 'Organizer 1'
    },
    {
      title: 'Payback Team',
      description: 'Donation collect ...',
      date: 'Jan 25, 2024',
      imageUrl: 'assets/images/fun.jpg'
      ,location: 'Event Venue 1',
      time: '10:00 AM - 2:00 PM',
      organizer: 'Organizer 1'
    },
    {
      title: 'Fun @ Worx',
      description: 'Description for Event 1...',
      date: 'Jan 25, 2024',
      imageUrl: 'assets/images/sharingiscaring.jpg'
      ,location: 'Event Venue 1',
      time: '10:00 AM - 2:00 PM',
      organizer: 'Organizer 1'
    },
    {
      title: 'HR Team',
      description: 'Description for Event 1...',
      date: 'Jan 25, 2024',
      imageUrl: 'assets/images/bg.jpg'
      ,location: 'Event Venue 1',
      time: '10:00 AM - 2:00 PM',
      organizer: 'Organizer 1'
    },
    {
      title: 'Payback Team',
      description: 'Description for Event 1...',
      date: 'Jan 25, 2024',
      imageUrl: 'assets/images/guitar.jpg'
      ,location: 'Event Venue 1',
      time: '10:00 AM - 2:00 PM',
      organizer: 'Organizer 1'
    },
    {
      title: 'Fun @ Worx',
      description: 'Description for Event 1...',
      date: 'Jan 25, 2024',
      imageUrl: 'assets/images/hiking.jpg'
      ,location: 'Event Venue 1',
      time: '10:00 AM - 2:00 PM',
      organizer: 'Organizer 1'
    },
    {
      title: 'HR Team',
      description: 'Description for Event 1...',
      date: 'Jan 25, 2024',
      imageUrl: 'assets/images/press.jpg'
      ,location: 'Event Venue 1',
      time: '10:00 AM - 2:00 PM',
      organizer: 'Organizer 1'
    },
    {
      title: 'Payback Team',
      description: 'Description for Event 1...',
      date: 'Jan 25, 2024',
      imageUrl: 'assets/images/bg.jpg'
      ,location: 'Event Venue 1',
      time: '10:00 AM - 2:00 PM',
      organizer: 'Organizer 1'
    },

    // Add more events here...
  ];
  selectedEvent: BaseEvent | null = null; // Track the selected event
  searchText: string = ''; // Track the search query

  constructor() {}

  // Method to handle the click event of "Learn More" button
  openEventDetails(event: BaseEvent) {
    this.selectedEvent = event;
  }

  // Method to close the pop-out box
  closeEventDetails() {
    this.selectedEvent = null;
  }

  // Method to handle the search event
  handleSearch(query: string) {
    this.searchText = query;
  }

  // Computed property to filter events based on search query
  get filteredEvents(): BaseEvent[] {
    return this.events.filter(event =>
      event.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}