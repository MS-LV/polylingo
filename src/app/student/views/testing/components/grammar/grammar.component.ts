import {
  Component,
  inject,
  input,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import {GrammarDocument} from '@admin/components/component.interface';
import {TestingComponent} from '@student/views/testing/testing.component';
import {QuestionsFormComponent} from '@student/views/testing/components/questions-form/questions-form.component';


@Component({
  selector: 'comp-grammar',
  standalone: true,
  imports: [QuestionsFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './grammar.component.html',
  styleUrl: './grammar.component.scss',
})
export class GrammarComponent implements OnInit, OnDestroy {
  readonly testingComponent = inject(TestingComponent);
  formGroup = input.required<FormGroup>();
  document = input.required<GrammarDocument>();

  constructor() {}

  ngOnInit(): void {
  }

  submit() {
    this.testingComponent.nextActivity();
  }

  ngOnDestroy(): void {}
}
