import { Component, OnInit, input, computed } from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormArray} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

import {GrammarFormGroup } from '@admin/components/component.interface';

@Component({
  selector: 'comp-variants-form',
  templateUrl: './variants-form.component.html',
  styleUrl: './variants-form.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
  ],
})
export class VariantsFormComponent implements OnInit {
  formGroup = input.required<FormGroup<GrammarFormGroup>>();
  questionList = computed(() => <FormArray>this.formGroup().get('questionList'));

  ngOnInit(): void {
  }
}
