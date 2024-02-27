import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { addUser } from 'src/app/models/addUser';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})


export class SignUpComponent implements OnInit {

  model: addUser;
  registrationForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
    ) {
          this.model = {
            userName: '',
            password: '',
            email: '',
            profileImage: '',
            firstName: '',
            lastName: '',
            Phone: ''
          }
      }
    
    ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.email]],
      email: ['', Validators.required],
      profileImage: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
    }, { validators: passwordMatchValidator });
    
  }

  onSubmit() {
    this.apiService.request('addUser', 'post', this.registrationForm?.value).subscribe((result: any) => {
      console.log(result)
      if(result) {
        Swal.fire('Success', 'You have successfully registered', 'success').then(swalResult => {
          if(swalResult.value) this.router.navigate(['\event-display'])
        })
      }
    })
  }
}

function passwordMatchValidator(formGroup: FormGroup) {
  const password = formGroup.get('password');
  const confirmPassword = formGroup.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    return { passwordMatch: true };
  }

  return null;
}
