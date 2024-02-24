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

  filteredEvents: BaseEvent[] = []; // Array to store filtered events
  selectedEvent: BaseEvent | null = null; // Track the selected event
  

  constructor() {
    // Initialize filteredEvents with all events initially
    this.filteredEvents = this.events;
  }

  handleSearch(searchQuery: string) {
    if (searchQuery.trim() !== '') {
      this.filteredEvents = this.events.filter(event =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      // If search query is empty, show all events
      this.filteredEvents = this.events;
    }
  }

  // Method to handle the click event of "Learn More" button
  openEventDetails(event: BaseEvent) {
    this.selectedEvent = event;
  }

  // Method to close the pop-out box
  closeEventDetails() {
    this.selectedEvent = null;
  }
}