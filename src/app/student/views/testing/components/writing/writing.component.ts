import {
  Component,
  input,
  Inject,
  inject,
  computed,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

import { WritingDocument } from '@admin/components/component.interface';
import {TestingComponent} from '@student/views/testing/testing.component';
import { SettingFormConfig, SETTING_FORM_CONFIG_TOKEN } from '@configs/setting.configs';


@Component({
  selector: 'comp-writing',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './writing.component.html',
  styleUrl: './writing.component.scss',
})
export class WritingComponent implements OnInit {
  readonly testingComponent = inject(TestingComponent);
  formGroup =  input.required<FormGroup>();
  document = input.required<WritingDocument>();
  themes = computed(() => <string[]>this.formGroup().get('themes')!.value);
  formAssay = computed(() => <FormControl>this.formGroup().get('assay'));

  constructor(@Inject(SETTING_FORM_CONFIG_TOKEN) public config: SettingFormConfig) {
  }
  ngOnInit() {
  }
  submit() {
    this.testingComponent.nextActivity(true);
  }
}

