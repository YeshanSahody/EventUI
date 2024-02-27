import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

declare var $: any;

export function containsSpecialCharacter(control: AbstractControl): { [key: string]: boolean } | null {
  const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;  

  if (!specialCharacterRegex.test(control.value)) {
    return { 'specialCharacter': true };
  }
  return null;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginForm: FormGroup;
  private router = inject(Router);

  constructor(private fb: FormBuilder,
    private apiService : ApiService,
   private authService : AuthService,) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login Form: ', this.loginForm?.value);
      this.apiService
      .request('login', 'post', this.loginForm?.value)
      .subscribe((result : {[key: string]:any}) => {
        console.log("login result: ", result);
       // this.authService.login(result);
       if(result['status'] === "Success"){
        console.log("test");
        this.router.navigate(['/event-display']);
       }
      })
    } else {
      console.log('Form has validation errors');
      this.loginForm.get('password')?.markAsTouched();
    }
  }
}