import {
  Component,
  OnInit,
  viewChild,
  signal,
  WritableSignal,
} from '@angular/core';
import {ReactiveFormsModule, FormGroup} from '@angular/forms';
import {NgComponentOutlet, TitleCasePipe } from '@angular/common';

import { MatStepperModule, MatStepper } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import {TESTING_FORM_GROUP} from '@constants/form.constants';
import { Activities } from '@constants/enum.constants';
import {cloneForm, objectToFormGroup} from '@utils/object.utils';
import {testingDocumentData} from '@admin/views/folder/views/testing/testing.data';
import { AutoFocusDirective } from '@student_directives/auto-focus.directive';
import { TestingStep } from '@student_views/testing/testing.interface';
import {TestingService} from './testing.service';
import {activitiesStep} from './testing.data';

@Component({
  selector: 'view-testing',
  standalone: true,
  imports: [
    NgComponentOutlet,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    TitleCasePipe,
    AutoFocusDirective,
  ],
  providers: [TestingService],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss',
})
export class TestingComponent implements OnInit {
  stepper = viewChild.required(MatStepper);
  formGroup!: WritableSignal<FormGroup>;
  activitiesStep!: WritableSignal<TestingStep[]>;
  Activities = Activities;

  constructor(
    private service: TestingService
  ) {}

  ngOnInit() {
    this.formInit();
  }

  nextActivity(isFinish: boolean = false) {
    this.stepper().next();
    if(!isFinish || this.formGroup().invalid) {
      return;
    }
    this.submit();
    console.log(JSON.stringify(this.formGroup().value));
  }

  submit() {
  }

  private formInit() {
    const formGroup = objectToFormGroup(testingDocumentData[0], cloneForm(TESTING_FORM_GROUP));
    this.formGroup = signal(this.service.prepareFormGroup(formGroup));
    this.activitiesStep = signal(activitiesStep(this.formGroup()));
  }
}
