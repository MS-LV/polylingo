import { Component, OnInit, input, computed } from '@angular/core';
import {ReactiveFormsModule, FormGroup} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

import {VariantsFormComponent} from '@components/variants-form/variants-form.component';
import {GrammarFormGroup } from '@admin/components/component.interface';

@Component({
  selector: 'comp-reading-result',
  templateUrl: './reading-result.component.html',
  styleUrl: './reading-result.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    VariantsFormComponent
  ],
})
export class ReadingResultComponent implements OnInit {
  formGroup = input.required<FormGroup<GrammarFormGroup>>();
  readTexts = computed(() => <string[]>this.formGroup().get('readTexts')!.value)



  ngOnInit(): void {
  }
}
