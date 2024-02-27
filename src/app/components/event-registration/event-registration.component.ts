import { formatDate } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { format, time } from 'highcharts';
import { DateTime } from 'luxon';
import { IEventModels } from 'src/app/models/eventRegistrationModels';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  // standalone: true,
  // imports: [],
})
export class EventRegistrationComponent implements OnInit {
  model: IEventModels;
  eventRegistrationForm! : FormGroup;
  fromDate!: NgbDateStruct;
  typeOfContracts = [
    { id: 'P', name: 'Permanent' },
    { id: 'T', name: 'Temporary' },
    { id: 'R', name: 'Replacement' },
  ];
  selectedContract = 'P';
  submitted: boolean = false;

  constructor(
    private calendar: NgbCalendar,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    ) {
      this.model = {
        eventName : '',
        description: '',
        starting_Time: '',
        ending_Time: '',
        objective: '',
        status: '',
        startDate: '',
        endDate: '',
        type: '',
        location: '',
        attachment: '',
        event_Image: '',
        sponsors: '',
        outcome: '',
        capacity: 0
      }
    }
    
    ngOnInit(): void { 
      this.fromDate = this.calendar.getToday();
      // Add margin dynamically
      const container = document.querySelector('.container');
      if (container) {
        container.classList.add('custom-margin');
      }
      
      this.eventRegistrationForm = this.formBuilder.group({
        eventName: ['', Validators.required],
        description: ['', Validators.required],
        starting_Time : ['', Validators.required],
        ending_Time: ['', Validators.required],
        objective: ['', Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        status: ['', Validators.required],
        type: ['', Validators.required],
        location: ['', Validators.required],
        attachment: [''],
        event_Image: [''],
        sponsors: ['', Validators.required],
        outcome: ['', Validators.required]
      });
    }

    saveEvent(){
        console.log('Value of event registration: ', this.eventRegistrationForm?.value);
        this.apiService.request('addEvent', 'post', this.eventRegistrationForm?.value).subscribe(result => {
          console.log(result)
          if (result) {
            Swal.fire('Success', 'You have successfully created the event', 'success').then(swalResult => {
              if(swalResult.value) this.router.navigate(['\event-display'])
            })
          }
        })  
      }
    }

