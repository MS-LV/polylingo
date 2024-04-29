import {
  Component,
  computed,
  input,
  inject,
  OnInit,
  viewChild,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormArray} from '@angular/forms';
import { TitleCasePipe, JsonPipe } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule, MatStepper } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import {DictionaryDocument, DictionaryQuestionDocument} from '@admin/components/component.interface';
import { AutoFocusDirective } from '@student_directives/auto-focus.directive';
import {TestingComponent} from '@student/views/testing/testing.component';

@Component({
  selector: 'comp-dictionary',
  standalone: true,
  imports: [
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    TitleCasePipe,
    JsonPipe,
    AutoFocusDirective,
    MatIconModule,
  ],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.scss',
})
export class DictionaryComponent implements OnInit, OnDestroy {
  stepper = viewChild.required(MatStepper);
  readonly testingComponent = inject(TestingComponent);
  formGroup = input.required<FormGroup>();
  document = input.required<DictionaryDocument>();
  formArray = computed(() => <FormArray>this.formGroup().get('questionList'));
  questionList = computed(() => <DictionaryQuestionDocument[]>this.formArray().value);

  constructor() {}

  ngOnInit() {
  }

  input(event: Event) {
    // const value = (<HTMLInputElement>event.target).value;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
  }
  onInputEnter(event: Event, index: number) {
    const currentField = this.formGroup().get('questionList')!.get('' + index);
    const isFieldValid = currentField!.invalid;

    if (isFieldValid) {
      event.preventDefault();
      currentField!.markAsTouched();
      return;
    }
    this.stepper().next();
  }

  submit() {
    this.testingComponent.nextActivity();
  }

  isValidField(index: number): boolean {
    const isValid =
      this.formGroup()
        .get('questionList')!
        .get('' + index)!
        .hasError('required') &&
      this.formGroup().get('questionList')!.get('' + index)!.touched;
    return isValid;
  }

  ngOnDestroy() {
  }
}
