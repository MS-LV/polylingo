import {
  Component,
  input,
  output,
  AfterViewInit,
  computed,
} from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import {FormGroup, FormArray, ReactiveFormsModule} from '@angular/forms';

import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { Activities } from '@constants/enum.constants';
import { ActivityOutputMessage } from '@student_views/testing/testing.interface';
import { ActivityMessageType } from '@student_views/testing/testing.constants';
import { AutoFocusDirective } from '@student_directives/auto-focus.directive';

@Component({
  selector: 'comp-questions-form',
  standalone: true,
  imports: [
    MatStepperModule,
    MatButtonModule,
    ReactiveFormsModule,
    TitleCasePipe,
    MatRadioModule,
    MatIconModule,
    AutoFocusDirective,
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: true, showError: true },
    },
  ],
  templateUrl: './questions-form.component.html',
  styleUrl: './questions-form.component.scss',
})
export class QuestionsFormComponent implements AfterViewInit {
  formGroup = input.required<FormGroup>();
  valueChange = output<ActivityOutputMessage>();
  formArray = computed(() => <FormArray>this.formGroup().get('questionList')!);
  questionList = computed(() => <any[]>this.formArray().value);
  
  constructor() {
  }

  ngAfterViewInit(): void {
  }

  submit() {
    const message: ActivityOutputMessage = {
      activity: Activities.GRAMMAR,
      type: ActivityMessageType.DONE,
    };
    this.valueChange.emit(message);
  }
  onNextClick() {}

  checkAnswer() {}

  ngOnDestroy(): void {
  }
}
