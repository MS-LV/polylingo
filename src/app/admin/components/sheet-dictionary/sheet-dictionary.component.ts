import { Component, OnInit, signal, Inject, computed } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';

import { MATERIAL_CONFIG_TOKEN, MaterialConfig } from '@/material.config';
import {cloneForm, clearFormGroup} from '@utils/object.utils';
import { SheetData } from '@admin/components/component.interface';
import { FormatInputDirective } from '@/directives/format-input.directive';

@Component({
  selector: 'comp-sheet-dictionary',
  templateUrl: './sheet-dictionary.component.html',
  styleUrl: './sheet-dictionary.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterLink,
    MatRadioModule,
    MatListModule,
    MatTooltipModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormatInputDirective,
  ],
  providers: [],
})
export class SheetDictionaryComponent implements OnInit {
  formGroup = computed<FormGroup>(() => this.sheetData.formGroup);
  sumitTitle = computed<string>(() => {
    if (this.sheetData.mode === 'update') {
      return 'update';
    }
    return 'add';
  });
  fields = signal([
    {
      title: 'Tajik',
      formControl: computed<FormControl>(
        () => this.formGroup().get('tajik') as FormControl
      ),
    },
    {
      title: 'Russian',
      formControl: computed<FormControl>(
        () => this.formGroup().get('russian') as FormControl
      ),
    },
    {
      title: 'English',
      formControl: computed<FormControl>(
        () => this.formGroup().get('english') as FormControl
      ),
    },
  ]);

  constructor(
    @Inject(MATERIAL_CONFIG_TOKEN) public materialConfig: MaterialConfig,
    @Inject(MAT_BOTTOM_SHEET_DATA) private sheetData: SheetData,
    private bottomSheetRef: MatBottomSheetRef<SheetDictionaryComponent>
  ) {}

  ngOnInit(): void {
    this.bottomSheetRef.disableClose = true;
  }

  close(event: MouseEvent): void {
    this.bottomSheetRef.dismiss(false);
    event.preventDefault();
  }
  submit() {
    this.bottomSheetRef.dismiss(cloneForm(this.formGroup()));
  }

  reset() {
    clearFormGroup(this.formGroup());
  }
}
