
import { CommonModule, formatDate } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  FullCalendarComponent,
  FullCalendarModule,
} from '@fullcalendar/angular';
import { Calendar, CalendarOptions, EventApi } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import luxon2Plugin from '@fullcalendar/luxon2';
import timeGridPlugin from '@fullcalendar/timegrid';
import { NgbDatepicker, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { SdwdsFullCalendarIcons } from '@sdworx/sdwds/fullcalendar';
import { CalenderService } from 'src/app/services/calender.service';
import { DateTime } from 'luxon';


import { ICalendarEvent } from 'src/app/model/event.model';
import { PartialEvent } from 'src/app/model/partial-event';
import { EventCalendarService } from 'src/app/services/event-calender/event-calender.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    FullCalendarModule
  ],
  providers: [CalenderService, HttpClient],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit, AfterViewInit {
  @ViewChild('calendar') fullcalendar!: FullCalendarComponent;
  calendarOptions!: CalendarOptions;
  calApi!: Calendar;

  selectedTypeOfAbsence = 0;
  typeOfAbsences = ['Holiday', 'ADV', 'Sickness'];
  @ViewChild('dpStart') dpStart!: NgbDatepicker;
  @ViewChild('dpEnd') dpEnd!: NgbDatepicker;

  nowDate = new Date();
  nowDateString = this.nowDate.toString();
  yearMonth =
    this.nowDate.getUTCFullYear() +
    '-' +
    (this.nowDate.getUTCMonth() < 9 ? '0' : '') +
    (this.nowDate.getUTCMonth() + 1);
  tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
  todayString = this.yearMonth + '-' + this.nowDate.getUTCDate();
  yesterdayString =
    this.yesterday.getUTCFullYear() +
    '-' +
    (this.yesterday.getUTCMonth() + 1 < 10 ? '0' : '') +
    (this.yesterday.getUTCMonth() + 1) +
    '-' +
    (this.yesterday.getUTCDate() < 10 ? '0' : '') +
    this.yesterday.getUTCDate();
  tomorrowString =
    this.tomorrow.getUTCFullYear() +
    '-' +
    (this.tomorrow.getUTCMonth() + 1 < 10 ? '0' : '') +
    (this.tomorrow.getUTCMonth() + 1) +
    '-' +
    (this.tomorrow.getUTCDate() < 10 ? '0' : '') +
    this.tomorrow.getUTCDate();

  newEventRequest = new FormGroup({
    eventAbsenceType: new FormControl(''),
    eventType: new FormControl(''),
    eventStartDate: new FormControl(),
    eventEndDate: new FormControl(),
    eventComments: new FormControl(''),
  });
  component!: any;

  config = {};
  options: NgbModalOptions = {
    centered: true,
  };

  private _eventCalendarService = inject(EventCalendarService);

  events: ICalendarEvent[] = [];

  constructor() {
    this.component = {
      name: 'calendar',
      cssVariables: true,
      dependencies: [
        {
          link: 'https://fullcalendar.io/docs',
          description: '@fullcalendar/angular',
        },
      ],
    };

    this.newEventRequest.controls['eventAbsenceType'].setValue('Holiday', {
      onlySelf: true,
    });
    this.newEventRequest.controls['eventStartDate'].setValue(
      {
        day: this.nowDate.getDay(),
        month: this.nowDate.getUTCMonth() + 1,
        year: this.nowDate.getFullYear(),
      },
      { onlySelf: true }
    );
    this.newEventRequest.controls['eventEndDate'].setValue(
      {
        day: this.nowDate.getDay(),
        month: this.nowDate.getUTCMonth() + 1,
        year: this.nowDate.getFullYear(),
      },
      { onlySelf: true }
    );
  }

  ngOnInit(): void {

    this._eventCalendarService.getAllEventDetails().subscribe({
      next: (events) => {
        this.events = events;
      },
      error: () => {},
    });

    this.calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin, luxon2Plugin],
      themeSystem: 'sdwds',
      initialView: 'dayGridMonth',
      eventOverlap: false,
      customButtons: {
        grid: {
          text: 'grid',
          hint: 'Show grid template',
          icon: SdwdsFullCalendarIcons.grid,
          click: this.handleGridClick.bind(this),
        },
        list: {
          text: 'list',
          hint: 'Show list template',
          icon: SdwdsFullCalendarIcons.list,
          click: this.handleListClick.bind(this),
        },
        add: {
          text: 'add new',
          hint: 'Add a new event',
          click: this.createEventClick.bind(this),
        },
      },
      headerToolbar: {
        start: 'prev,today,next timeGridWeek,dayGridMonth',
        center: 'title',
        end: 'grid,list',
      },
      eventClick: this.handleEventClick.bind(this),
      weekNumbers: true,
      weekNumberFormat: { week: 'narrow' },
      weekends: true,
      firstDay: 1,
      displayEventTime: true,
      eventTimeFormat: 'H(:mm)',
      dayMaxEvents: 2,
      nowIndicator: true,
      views: {
        timeGrid: {
          slotMinTime: '08:00',
          slotMaxTime: '20:00',
          expandRows: false,
          dayHeaderContent: (arg) => {
            const value = arg.date;
            const dt = new Date(value);
            const day = formatDate(dt, 'E', 'en-US');
            const dayNumber = formatDate(dt, 'dd', 'en-US');
            const el = document.createElement('span');
            el.classList.add('sdwds-day-number');
            el.innerText = dayNumber;
            const res = { html: day + el.outerHTML };
            return res;
          },
        },
      },
      events: this.loadEvents(),
      viewDidMount: (arg) => {
        const fullCal = arg.el.closest('full-calendar');
        const headerList = fullCal
          ? fullCal.getElementsByClassName('fc-toolbar')
          : null;
        const header = headerList ? headerList[0] : new Element();
        const gridButton = header
          ? header.querySelector('button.fc-grid-button')
          : null;
        const month = header
          ? header.querySelector('button.fc-dayGridMonth-button')
          : null;

        if (!gridButton) return;

        this.setButtonActive(gridButton, 'fc-grid-button');
        this.createSegmentedControl(gridButton);
        this.createSegmentedControl(month);
      },
      eventContent: (arg) => {
        let arrayOfDomNodes: HTMLElement[] = [];

        if (arg.view.type === 'dayGridMonth') {
          arrayOfDomNodes = arg.event.allDay
            ? this.renderAllDayEvent(arg.event)
            : this.renderEvent(arg.event);
        } else if (arg.view.type == 'timeGridWeek') {
          arrayOfDomNodes = arg.event.allDay
            ? this.renderAllDayEvent(arg.event)
            : this.renderEventInTimeGrid(arg.event);
        } else if (arg.view.type.indexOf('list') > -1) {
          arrayOfDomNodes = arg.event.allDay
            ? this.renderAllDayListEvent(arg.event)
            : this.renderEventInList(arg.event);
        }

        return { domNodes: arrayOfDomNodes };
      },
    };
  }

  ngAfterViewInit() {
    this.calApi = this.fullcalendar.getApi();
  }

  mapToCalendar(events: PartialEvent[]): ICalendarEvent[] {
    return events.map((event) => {
      return <ICalendarEvent>{
        title: event.name,
        start: event.startDateTime,
        end: event.endDateTime,
        date: event.startDateTime,
        description: event.description,
        allDay: true,
        classNames: [
          this.setEventColor(event.eventCategory.categoryName),
          event.eventCategory.categoryName == 'Competition' ? 'my-5' : '',
        ],
        extendedProps: {
          description: '',
          duration: DateTime.fromJSDate(event.endDateTime).diff(
            DateTime.fromJSDate(event.endDateTime)
          ).hours,
          endTime: event.endDateTime,
          startTime: event.startDateTime,
          locations: event.location,
          roles: event.allowedEventRoles,
        },
      };
    });
  }

  private setEventColor(eventType: string) {
    switch (eventType) {
      case 'Competition':
        return 'fc-event-data-indigo-light';
      case 'Meeting':
        return 'fc-event-data-lime-light';
      case 'Festival':
        return 'fc-event-data-deep-orange';
      case 'Wedding':
        return 'fc-event-data-pink-light';
      case 'Convention':
        return 'fc-event-data-blue-light';
      case 'Hybrid Event':
        return 'fc-event-data-teal-light';
      case 'Music Festival':
        return 'fc-event-data-violet-light';
      default:
        return 'fc-event-data-blue-light';
    }
  }

  loadEvents() {
    const now = DateTime.now(), year = now.year, month = now.month - 1;
    const events: PartialEvent[] = [
      {
        id: '1',
        name: 'SD Pool Tournament',
        startDateTime: new Date(year, month, 17),
        endDateTime: new Date(year, month, 28),
        description:
          "The SD Pool Tournament is an annual event in Ebene,Mauritius uniting pool players of all levels. Spanning multiple days, it features competitive matches, camaraderie, and top-quality tables. Spectators witness skilled play, with side events and an awards ceremony adding to the excitement. It's a celebration of the shared love for the game of pool.",
        eventCategory: {
          categoryName: 'Competition',
        },
        location: {
          locationId: '1',
          name: 'Mauritius',
          address: 'NEX Building, Ebene',
          country: 'Mauritius',
        },
        allowedEventRoles: [
          {
            eventId: '2',
            eventRole: 'Attendee',
            canSubscribe: true,
          },
        ],
      },
      {
        id: '2',
        name: 'Pizza Party',
        startDateTime: new Date(year, month, 23),
        endDateTime: new Date(year, month, 24),
        description: 'Ridwaan paying pizza',
        eventCategory: {
          categoryName: 'Festival',
        },
        location: {
          locationId: '2',
          name: 'Belgium',
          address: 'Bredastraat 165, Antwerp',
          country: 'Belgium',
        },
        allowedEventRoles: [
          {
            eventId: '2',
            eventRole: 'Attendee',
            canSubscribe: true,
          },
        ],
      },
      {
        id: '3',
        name: 'Sparkathon',
        startDateTime: new Date(year, month, 2),
        endDateTime: new Date(year, month, 4),
        description: '3-day hackathon',
        eventCategory: {
          categoryName: 'Convention',
        },
        location: {
          locationId: '3',
          name: 'United Kingdom',
          address: '1 Northumberland Avenue, London',
          country: 'United Kingdom',
        },
        allowedEventRoles: [
          {
            eventId: '3',
            eventRole: 'Organiser',
            canSubscribe: true,
          },
          {
            eventId: '4',
            eventRole: 'Attendee',
            canSubscribe: true,
          },
          {
            eventId: '5',
            eventRole: 'Volunteer',
            canSubscribe: true,
          },
          {
            eventId: '6',
            eventRole: 'Participant',
            canSubscribe: true,
          },
        ],
      },
      {
        id: '4',
        name: 'Food Festival',
        startDateTime: new Date(year, month, 17),
        endDateTime: new Date(year, month, 19),
        description: 'Sale of various food items',
        eventCategory: {
          categoryName: 'Festival',
        },
        location: {
          locationId: '4',
          name: 'Germany',
          address: 'Frankfurter Straße 56, Wiesbaden',
          country: 'Germany',
        },
        allowedEventRoles: [
          {
            eventId: '4',
            eventRole: 'Organiser',
            canSubscribe: true,
          },
        ],
      },
      {
        id: '5',
        name: 'Christmas Party',
        startDateTime: new Date(year, month, 24),
        endDateTime: new Date(year, month, 24),
        description: 'Christmas celebration in the office',
        eventCategory: {
          categoryName: 'Festival',
        },
        location: {
          locationId: '5',
          name: 'Netherlands',
          address: 'Laan van Zuid Hoorn 65, Rotterdam',
          country: 'Netherlands',
        },
        allowedEventRoles: [
          {
            eventId: '5',
            eventRole: 'Volunteer',
            canSubscribe: true,
          },
        ],
      },
      {
        id: '6',
        name: 'Photography Session',
        startDateTime: new Date(year, month, 12),
        endDateTime: new Date(year, month, 14),
        description: 'Employee photo session',
        eventCategory: {
          categoryName: 'Convention',
        },
        location: {
          locationId: '6',
          name: 'France',
          address: 'Rue de la Paix 25, Paris',
          country: 'France',
        },
        allowedEventRoles: [
          {
            eventId: '4',
            eventRole: 'Organiser',
            canSubscribe: true,
          },
          {
            eventId: '6',
            eventRole: 'Attendee',
            canSubscribe: true,
          },
        ],
      },
      {
        id: '8',
        name: 'EoY Party',
        startDateTime: new Date(year, month, 9),
        endDateTime: new Date(year, month, 10),
        description: 'End of Year Party',
        eventCategory: {
          categoryName: 'Hybrid Event',
        },
        location: {
          locationId: '1',
          name: 'Mauritius',
          address: 'NEX Building, Ebene',
          country: 'Mauritius',
        },
        allowedEventRoles: [
          {
            eventId: '8',
            eventRole: 'Attendee',
            canSubscribe: true,
          },
        ],
      },
      {
        id: '9',
        name: 'Tii Alexandre Concert',
        startDateTime: new Date(year, month, 26),
        endDateTime: new Date(year, month, 28),
        description: 'Tii Alexandre Music Festival',
        eventCategory: {
          categoryName: 'Music Festival',
        },
        location: {
          locationId: '4',
          name: 'Germany',
          address: 'Frankfurter Straße 56, Wiesbaden',
          country: 'Germany',
        },
        allowedEventRoles: [
          {
            eventId: '9',
            eventRole: 'Attendee',
            canSubscribe: true,
          },
        ],
      },
      {
        id: '10',
        name: 'Yogesh Party',
        startDateTime: new Date(year, month, 25),
        endDateTime: new Date(year, month, 26),
        description: 'Yogesh Party',
        eventCategory: {
          categoryName: 'Music Festival',
        },
        location: {
          locationId: '6',
          name: 'France',
          address: 'Rue de la Paix 25, Paris',
          country: 'France',
        },
        allowedEventRoles: [
          {
            eventId: '10',
            eventRole: 'Attendee',
            canSubscribe: true,
          },
        ],
      },
      {
        id: '11',
        name: 'Khilesh Party',
        startDateTime: new Date(year, month, 25),
        endDateTime: new Date(year, month, 26),
        description: 'Khilesh Party',
        eventCategory: {
          categoryName: 'Music Festival',
        },
        location: {
          locationId: '3',
          name: 'United Kingdom',
          address: '1 Northumberland Avenue, London',
          country: 'United Kingdom',
        },
        allowedEventRoles: [
          {
            eventId: '1',
            eventRole: 'Attendee',
            canSubscribe: true,
          },
        ],
      },
    ];

    return this.mapToCalendar(events);
  }

  addEvent() {
    const controls = this.newEventRequest.controls;
    const endDay = Number(controls['eventEndDate'].value.day) + 1 + '';
    const type = controls['eventAbsenceType'].value
      ? controls['eventAbsenceType'].value
      : '';
  }

  findClassnameFor(absenceType: string): string {
    const holiday = 'Holiday',
      adv = 'ADV',
      sick = 'Sickness';

    if (absenceType === holiday) {
      return 'fc-event-data-green';
    }
    if (absenceType === adv) {
      return 'fc-event-data-lime';
    }
    if (absenceType === sick) {
      return 'fc-event-data-deep-orange';
    }

    return '';
  }

  renderAllDayEvent(event: EventApi) {
    const eventFrame = document.createElement('div');
    const eventTitleContainer = document.createElement('div');
    const eventTitle = document.createElement('div');
    const eventDescription = document.createElement('div');

    eventFrame.className = 'fc-event-main-frame';
    eventTitleContainer.className = 'fc-event-title-container';
    eventTitle.className = 'fc-event-title fc-sticky';
    eventDescription.className = 'fc-event-description';

    eventTitle.append(event.title);
    eventTitleContainer.appendChild(eventTitle);
    eventFrame.appendChild(eventTitleContainer);

    return [eventFrame];
  }

  renderEvent(event: EventApi) {
    const line = document.createElement('div');
    const eventTime = document.createElement('div');
    const eventTitle = document.createElement('div');
    const eventDescription = document.createElement('div');
    const eventDuration = document.createElement('span');

    eventTime.className = 'fc-event-time';
    eventTitle.className = 'fc-event-title';
    eventDuration.className = 'fc-event-duration';
    eventDescription.className = 'fc-event-description';
    line.className = 'fc-event-line';

    const props = event.extendedProps;

    eventTitle.append(event.title);

    if (props) {
      if (props['startTime'] && !event.allDay) {
        eventTime.append(props['startTime']);
      } else {
        eventTime.remove();
      }
    }

    return [line, eventTime, eventTitle, eventDuration];
  }

  renderEventInTimeGrid(event: EventApi) {
    const eventIsShort = this.isEventShort(event);

    const eventFrame = document.createElement('div');
    const eventTitleContainer = document.createElement('div');
    const eventTitle = document.createElement('div');
    const eventDuration = document.createElement('span');
    const eventTime = document.createElement('div');
    const eventDescription = document.createElement('div');
    const props = event.extendedProps;

    eventFrame.className = 'fc-event-main-frame';
    eventTitleContainer.className = 'fc-event-title-container';
    eventTitle.className = 'fc-event-title fc-sticky';
    eventTime.className = 'fc-event-time';
    eventDuration.className = 'fc-event-duration';
    eventDescription.className = 'fc-event-description';

    eventFrame.appendChild(eventTime);
    eventTitleContainer.appendChild(eventTitle);
    eventTitleContainer.appendChild(eventDuration);
    eventFrame.appendChild(eventTitleContainer);

    eventTitle.append(event.title);
    if (props) {
      if (props['duration'] && !eventIsShort) {
        eventDuration.innerHTML = props['duration'];
      } else {
        eventDuration.remove();
      }

      if (props['startTime']) {
        eventTime.append(props['startTime']);
      } else {
        eventTime.remove();
      }

      if (props['endTime'] && !eventIsShort) {
        eventTime.append(' - ' + props['endTime']);
      }
    }

    return [eventFrame];
  }

  renderAllDayListEvent(event: EventApi) {
    const eventFrame = document.createElement('div');
    const eventTitleContainer = document.createElement('div');
    const eventTitle = document.createElement('div');
    const eventDescription = document.createElement('div');

    eventFrame.className = 'fc-event-main-frame';
    eventTitleContainer.className = 'fc-event-title-container';
    eventTitle.className = 'fc-event-title fc-sticky';
    eventDescription.className = 'fc-event-description';

    eventTitle.append(event.title);
    eventTitleContainer.appendChild(eventTitle);
    eventFrame.appendChild(eventTitleContainer);

    return [eventFrame];
  }

  renderEventInList(event: EventApi) {
    const line = document.createElement('div');
    const eventTime = document.createElement('div');
    const eventTitle = document.createElement('div');
    const eventDescription = document.createElement('div');
    const eventDuration = document.createElement('span');

    eventTime.className = 'fc-event-time';
    eventTitle.className = 'fc-event-title';
    eventDuration.className = 'fc-event-duration';
    eventDescription.className = 'fc-event-description';
    line.className = 'fc-event-line';

    const props = event.extendedProps;
    eventTitle.append(event.title);

    if (props) {
      if (props['startTime'] && !event.allDay) {
        eventTime.append(props['startTime']);
      } else {
        eventTime.remove();
      }
    }

    return [line, eventTime, eventTitle, eventDuration];
  }

  isEventShort(event: EventApi): boolean {
    const props = event.extendedProps;
    if (props) {
      if (!props['duration'] || (!props['startTime'] && !props['endTime'])) {
        console.error(
          'Event should have a props duration or (start and end) time. Result: we render as allday event'
        );
        return false;
      }

      if (props['duration']) {
        const hours = props['duration'].substring(
          0,
          props['duration'].indexOf(':')
        );
        const hoursNumber = isNaN(Number(hours)) ? 0 : Number(hours);
        return hoursNumber < 1;
      }

      const start = props['startTime'].substring(
        0,
        props['startTime'].indexOf(':')
      );
      const end = props['endTime'].substring(0, props['endTime'].indexOf(':'));
      const startNumber = isNaN(Number(start)) ? 0 : Number(start);
      const endNumber = isNaN(Number(end)) ? 0 : Number(end);
      return endNumber - startNumber < -1;
    }
    return false;
  }

  createEventClick(arg: any) {
    //this.createEventModal.show();
  }

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr);
  }

  handleEventClick(arg: any) {
    var eventData = arg.event._def;
    console.log(eventData)
  }

  handleListClick(arg: any) {
    this.fullcalendar.getApi().changeView('listMonth');
    this.setButtonActive(arg.target, 'fc-list-button');
  }

  handleGridClick(arg: any) {
    this.fullcalendar.getApi().changeView('dayGridMonth');
    this.setButtonActive(arg.target, 'fc-grid-button');
  }

  private setButtonActive(arg: any, className: string) {
    if (!arg) return;

    const btngroup = arg.closest('div.btn-group');
    if (btngroup.hasChildNodes()) {
      const buttons = btngroup.childNodes;
      buttons.forEach((button: any) => {
        if (button.className.indexOf(className) > -1) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      });
    }
  }

  private createSegmentedControl(month: Element | null) {
    if (month) {
      const btngroup = month.closest('div.btn-group');
      if (btngroup) {
        btngroup.classList.add('btn-group-segmented');
      }
    }
  }
}
