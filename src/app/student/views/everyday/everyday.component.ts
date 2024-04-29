import {
  Component,
  signal,
  computed,
  OnInit,
  viewChild,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';
import { TitleCasePipe, JsonPipe } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule, MatStepper } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import {clearFormGroup} from '@utils/object.utils';
import {EVERYDAY_FORM_GROUP} from '@constants/form.constants';
import { AutoFocusDirective } from '@student_directives/auto-focus.directive';
import {everydayDocumentsData} from '@admin/views/folder/views/everyday/everyday.data';
import {EverydayList} from '@student_views/everyday/everyday.interface';

@Component({
  selector: 'view-everyday',
  standalone: true,
  imports: [
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    TitleCasePipe,
    JsonPipe,
    AutoFocusDirective,
    MatIconModule,
  ],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './everyday.component.html',
  styleUrl: './everyday.component.scss',
})
export class EverydayComponent implements OnInit, OnDestroy {
  stepper = viewChild.required(MatStepper);
  formGroup = signal(EVERYDAY_FORM_GROUP);
  formArray = computed(() => <FormArray>this.formGroup().get('questionList'));
  everydayDocument = signal(everydayDocumentsData[0]);
  questionList = computed(() => this.everydayDocument().questionList);

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.formInit();
  }

  input(event: Event, question: EverydayList) {
    const value = (<HTMLInputElement>event.target).value;
    question.answer = value;
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
    console.log(this.formGroup());
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

  private formInit() {
    this.questionList().forEach(question => {
      const formGroup = <FormGroup>this.fb.group({
        answer: [question.english, [Validators.required]],
        userAnswer: ['', Validators.required]
      });
      this.formArray().push(formGroup);
    });
  }
  ngOnDestroy() {
    clearFormGroup(this.formGroup());
  }
}
