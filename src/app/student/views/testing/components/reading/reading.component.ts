import {
  Component,
  inject,
  computed,
  input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import {GrammarDocument} from '@admin/components/component.interface';
import {TestingComponent} from '@student/views/testing/testing.component';
import {QuestionsFormComponent} from '@student/views/testing/components/questions-form/questions-form.component';

@Component({
  selector: 'comp-reading',
  standalone: true,
  imports: [QuestionsFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './reading.component.html',
  styleUrl: './reading.component.scss',
})
export class ReadingComponent {
  readonly testingComponent = inject(TestingComponent);
  formGroup = input.required<FormGroup>();
  document = input.required<GrammarDocument>();
  readTexts = computed(() => <string[]>this.formGroup().get('readTexts')!.value)

  ngOnInit(): void {
  }

  submit() {
    this.testingComponent.nextActivity();
  }
  ngOnDestroy(): void {}
}
