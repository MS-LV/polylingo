import { Component, OnInit, signal } from '@angular/core';

import {
  ReactiveFormsModule,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-login-in',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatDividerModule,
  ],
})
export class LoginComponent implements OnInit {
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  emailTypes = signal([
    {
      name: 'Gmail',
      value: '@gmail.com',
    },
    {
      name: 'Email',
      value: '@email.ru',
    },
  ]);
  emailField = signal(['']);

  ngOnInit() {
    console.log(this.formGroup.get('email'));
  }
  onSubmit(): void {}
  onEmailInput(): void {
    const email = this.formGroup.get('email')!.value;
    if (!email) {
      this.emailField.set(['']);
      return;
    }
    const emailName = this.formGroup
      .get('email')!
      .value!.match(new RegExp(/^\w+/)) as string[];
    this.emailField.set(emailName);
  }
}
