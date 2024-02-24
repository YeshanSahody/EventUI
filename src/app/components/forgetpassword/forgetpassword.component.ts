import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { PasswordStrength, customPatternValidator } from '@sdworx/sdwds/password-input';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss'
})
export class ForgetpasswordComponent {

  private _fb = inject(FormBuilder);

passwordForm = this._fb.group({
  newPassword: new FormControl<string>('', [Validators.required]),
  confirmNewPassword: new FormControl<string>('', [Validators.required]),
});
passwordStrength = {
  minLength: 8,
  minUppercase: 2,
  minLowercase: 2,
  minNumbers: 2,
  minSpecialCharacters: 2,
};
newPasswordValidatorsStrengths: PasswordStrength[] = [];
newPasswordValidators: ValidatorFn[] = [];
confirmNewPasswordValidatorsStrengths: PasswordStrength[] = [];
confirmNewPasswordValidators: ValidatorFn[] = [];
submitted = false;

ngOnInit(): void {
  this.passwordForm.get('newPassword')?.valueChanges.subscribe(() => {
    this.updateConfirmNewPasswordValidators();
    setTimeout(() => {
      const confirmNewPassword = this.passwordForm.get('confirmNewPassword')?.value;
      this.passwordForm.get('confirmNewPassword')?.setValue(confirmNewPassword!);
      this.passwordForm.get('confirmNewPassword')?.updateValueAndValidity();
    }, 100);
  });
  this.generateValidators();
  this.updateConfirmNewPasswordValidators();
}

generateValidators(): void {
  this.newPasswordValidators = [];
  if (this.passwordStrength.minLength) {
    this.newPasswordValidators.push(Validators.minLength(this.passwordStrength.minLength));
  }
  if (this.passwordStrength.minUppercase) {
    this.newPasswordValidators.push(
      customPatternValidator(new RegExp(`^(.*[A-Z]){${this.passwordStrength.minUppercase},}.*$`), 'uppercaseRequired')
    );
  }
  if (this.passwordStrength.minLowercase) {
    this.newPasswordValidators.push(
      customPatternValidator(new RegExp(`^(.*[a-z]){${this.passwordStrength.minLowercase},}.*$`), 'lowercaseRequired')
    );
  }
  if (this.passwordStrength.minNumbers) {
    this.newPasswordValidators.push(
      customPatternValidator(new RegExp(`^(.*[0-9]){${this.passwordStrength.minNumbers},}.*$`), 'numberRequired')
    );
  }
  if (this.passwordStrength.minSpecialCharacters) {
    this.newPasswordValidators.push(
      customPatternValidator(
        new RegExp(`^(.*[!@#$%^&*()_+|~={}:;<>?,.-]){${this.passwordStrength.minSpecialCharacters},}.*$`),
        'specialCharacterRequired'
      )
    );
  }

  this.newPasswordValidatorsStrengths.push({ color: 'var(--danger)', validators: [] });
  if (this.passwordStrength.minLength) {
    this.newPasswordValidatorsStrengths.push({
      color: 'var(--warning)',
      validators: [Validators.minLength(this.passwordStrength.minLength)],
    });
  }
  this.newPasswordValidatorsStrengths.push({
    color: 'var(--success)',
    validators: this.newPasswordValidators,
  });
}

updateConfirmNewPasswordValidators(): void {
  this.confirmNewPasswordValidators = [this.sameAsValidator('newPassword')];
  this.confirmNewPasswordValidatorsStrengths = [
    { color: 'var(--danger)', validators: [] },
    {
      color: 'var(--success)',
      validators: this.confirmNewPasswordValidators,
    },
  ];
}

submit(): void {
  console.log(this.passwordForm);
  this.submitted = true;
}

sameAsValidator(id: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = (document.querySelector(`#${id}`) as any)?.value;
    return value && control.value === value ? null : { sameAs: true };
  };
}

}
