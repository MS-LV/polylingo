import { Component, OnInit, Inject, computed } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
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
import { WritingSheetData } from '@admin/components/component.interface';
import { FormatInputDirective } from '@/directives/format-input.directive';

@Component({
  selector: 'comp-sheet-writing',
  templateUrl: './sheet-writing.component.html',
  styleUrl: './sheet-writing.component.scss',
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
export class SheetWritingComponent implements OnInit {
  formControl = computed<FormControl>(() => this.sheetData.formControl);
  sumitTitle = computed<string>(() => {
    if (this.sheetData.mode === 'update') {
      return 'update';
    }
    return 'add';
  });

  constructor(
    @Inject(MATERIAL_CONFIG_TOKEN) public materialConfig: MaterialConfig,
    @Inject(MAT_BOTTOM_SHEET_DATA) private sheetData: WritingSheetData,
    private bottomSheetRef: MatBottomSheetRef<SheetWritingComponent>
  ) {}

  ngOnInit(): void {
    this.bottomSheetRef.disableClose = true;
  }

  close(event: MouseEvent): void {
    this.bottomSheetRef.dismiss(false);
    event.preventDefault();
  }
  submit() {
    this.bottomSheetRef.dismiss(this.formControl());
  }

  reset() {
    this.formControl().reset();
  }
}
