import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
})
export class EventRegistrationComponent implements OnInit {
  fromDate!: NgbDateStruct;
  typeOfContracts = [
    { id: 'P', name: 'Permanent' },
    { id: 'T', name: 'Temporary' },
    { id: 'R', name: 'Replacement' },
  ];
  selectedContract = 'P';
  submitted: boolean = false;

  constructor(private calendar: NgbCalendar) {}

  ngOnInit(): void {
    this.fromDate = this.calendar.getToday();
    // Add margin dynamically
    const container = document.querySelector('.container');
    if (container) {
      container.classList.add('custom-margin');
    }
  }

  submitForm(): void {
    this.submitted = true;
  }
}
