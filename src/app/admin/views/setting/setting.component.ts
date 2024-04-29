import { Component, Inject, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import {SettingFormConfig, SETTING_FORM_CONFIG_TOKEN} from '@configs/setting.configs';
import { Ranger } from '@/app.interface';
import {SETTING_FORM_GROUP} from '@constants/form.constants';
import { clearFormGroup } from '@utils/object.utils';
import { formFieldsData } from './setting.data';

interface FormField {
  id: number;
  label: string;
  type: string;
  inputMode: string;
  formControlName: string;
  config: Ranger;
  placeholder: string;
  prefix: string;
  suffix: string;
}

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatIconModule,
  ],
})
export class SettingComponent implements OnInit {
  formGroup = signal<FormGroup>(SETTING_FORM_GROUP);
  formFields = signal<FormField[]>(formFieldsData);
  hidePassword = signal(false);

  constructor(@Inject(SETTING_FORM_CONFIG_TOKEN) public formConfig: SettingFormConfig) {}

  ngOnInit(): void {}
  onSubmit(): void {
    console.log('form value: ', this.formGroup().value);
  }
  passwordVisibility() {
    this.hidePassword.update(v => !v);
  }

  reset() {
    clearFormGroup(this.formGroup());
  }
}
