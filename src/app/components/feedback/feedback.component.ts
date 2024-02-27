import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IFeedbacks } from 'src/app/models/feedback';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  model: IFeedbacks;
  feedbackForm!: FormGroup

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private router: Router,
    ) {
    this.model = {
      DescriptionText: '',
      DescriptionDate: '',
    }
  }

  ngOnInit(): void {
    this.feedbackForm = this.formBuilder.group({
      DescriptionText: ['', Validators.required],
      DescriptionDate: ['', Validators.required],

    })
  }

  submitFeedback() {
    this.apiService.request('addFeedback', 'post', this.feedbackForm?.value).subscribe( result => {
      console.log(result)
      if(result) {
        Swal.fire('Success', 'You have successfully submitted the feedback', 'success').then(swalResult => {
          if(swalResult.value) this.router.navigate(['\event-display'])
        })
      }
    }
      
    )
    
      
    
  }
}
