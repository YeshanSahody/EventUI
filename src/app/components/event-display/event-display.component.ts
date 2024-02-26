import { Component, Input, OnInit } from '@angular/core';
import { IEventModels } from 'src/app/models/eventRegistrationModels';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.scss'],
})
export class EventDisplayComponent implements OnInit {
  events: IEventModels[] = [];
  filteredEvents: IEventModels[] = [];
  selectedEvent: IEventModels | null = null;
  @Input() list: any[] = [];
  @Input() entity: string = ' ';
  showCard: boolean = false;

  constructor(
    private apiService: ApiService,
    private storageService: StorageService,
    private dataService :  DataService
  ) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.apiService.request('viewAllEvent', 'get').subscribe((event: any) => {
      console.log('Fetching Event from server', event);
      this.events = event;
      this.filteredEvents = this.events;
    });
  }

  deleteEvent(eventName: string) {
    console.log('eventName ', eventName);
    this.events = this.events.filter((event) => event.eventName !== eventName);
    this.filteredEvents = this.events;
    this.storageService.set('events', this.events);
  }

  handleSearch(searchQuery: string) {
    if (searchQuery.trim() !== '') {
      this.filteredEvents = this.events.filter((event) =>
        event.eventName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      this.filteredEvents = this.events;
    }
  }
}