import { TestBed } from '@angular/core/testing';

import { EventCalendarService } from './event-calender.service';

describe('EventCalenderService', () => {
  let service: EventCalenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventCalenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
