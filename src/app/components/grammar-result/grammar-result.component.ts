import { Component, OnInit, input } from '@angular/core';
import {ReactiveFormsModule, FormGroup} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';

import {VariantsFormComponent} from '@components/variants-form/variants-form.component';
import {GrammarFormGroup } from '@admin/components/component.interface';

@Component({
  selector: 'comp-grammar-result',
  templateUrl: './grammar-result.component.html',
  styleUrl: './grammar-result.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatDividerModule,

    VariantsFormComponent,
  ],
})
export class GrammarResultComponent implements OnInit {
  formGroup = input.required<FormGroup<GrammarFormGroup>>();
  ngOnInit(): void {}
}
