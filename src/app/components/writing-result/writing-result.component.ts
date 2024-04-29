import { Component, OnInit, input, computed } from '@angular/core';
import {ReactiveFormsModule, FormGroup} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'comp-writing-result',
  templateUrl: './writing-result.component.html',
  styleUrl: './writing-result.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule,
  ],
})
export class WritingResultComponent implements OnInit {
  formGroup = input.required<FormGroup>();
  themes = computed(() => <string[]>this.formGroup().get('themes')!.value)



  ngOnInit(): void {
  }
}
