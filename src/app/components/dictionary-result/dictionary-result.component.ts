import { Component, OnInit, input, computed } from '@angular/core';
import {ReactiveFormsModule, FormGroup} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'comp-dictionary-result',
  templateUrl: './dictionary-result.component.html',
  styleUrl: './dictionary-result.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
})
export class DictionaryResultComponent implements OnInit {
  formGroup = input.required<FormGroup>();
  questionList = computed(() => this.formGroup().get('questionList')!)
  ngOnInit(): void {
  }
}
