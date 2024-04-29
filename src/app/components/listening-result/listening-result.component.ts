import { Component, OnInit, input, computed } from '@angular/core';
import {ReactiveFormsModule, FormGroup} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';

import {VariantsFormComponent} from '@components/variants-form/variants-form.component';
import {GrammarFormGroup } from '@admin/components/component.interface';

@Component({
  selector: 'comp-listening-result',
  templateUrl: './listening-result.component.html',
  styleUrl: './listening-result.component.scss',
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    VariantsFormComponent,
  ],
})
export class ListeningResultComponent implements OnInit {
  formGroup = input.required<FormGroup<GrammarFormGroup>>();
  audios = computed(() => <string[]>this.formGroup().get('audios')!.value);
  ngOnInit(): void {
  }
}
