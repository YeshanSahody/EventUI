import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

declare var $: any;

// Custom validator function
export function containsSpecialCharacter(control: AbstractControl): { [key: string]: boolean } | null {
  // Add your desired special characters to the regular expression
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
  otpForm: FormGroup;
  isLoggedIn: boolean = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), containsSpecialCharacter]]
    });

    this.otpForm = this.fb.group({
      otp: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Perform login logic here
      // For demonstration, let's assume login is successful
      this.isLoggedIn = true;
  
      $('#otpModal').modal('show');
    } else {
      console.log('Form has validation errors');
      this.loginForm.get('password')?.markAsTouched();
    }
  }
  

  verifyOTP() {
    console.log('OTP verification successful!');
  }
}
