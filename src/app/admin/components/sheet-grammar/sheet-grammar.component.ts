import { Component, OnInit, signal, Inject, computed } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';
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

import { clearFormGroup, cloneForm } from '@utils/object.utils';
import { MATERIAL_CONFIG_TOKEN, MaterialConfig } from '@/material.config';
import { SheetData } from '@admin/components/component.interface';
import { FormatInputDirective } from '@/directives/format-input.directive';

@Component({
  selector: 'comp-sheet-grammar',
  templateUrl: './sheet-grammar.component.html',
  styleUrl: './sheet-grammar.component.scss',
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
export class SheetGrammarComponent implements OnInit {
  formGroup = computed<FormGroup>(() => this.sheetData.formGroup);
  formArray = computed<FormArray>(() => {
    return this.formGroup().get('neither') as FormArray;
  });
  sumitTitle = computed<string>(() => {
    if (this.sheetData.mode === 'update') {
      return 'update';
    }
    return 'add';
  });
  requiredTasks = signal([
    {
      title: '* Fill description field',
      formControl: computed<FormControl>(
        () => this.formGroup().get('description') as FormControl
      ),
    },
    {
      title: '* Fill answer field',
      formControl: computed<FormControl>(
        () => this.formGroup().get('answer') as FormControl
      ),
    },
    {
      title: '* Add variants',
      formControl: this.formArray,
    },
  ]);
  variant = signal<FormControl>(new FormControl('', Validators.required));

  constructor(
    @Inject(MATERIAL_CONFIG_TOKEN) public materialConfig: MaterialConfig,
    @Inject(MAT_BOTTOM_SHEET_DATA) private sheetData: SheetData,
    private bottomSheetRef: MatBottomSheetRef<SheetGrammarComponent>
  ) {}

  ngOnInit(): void {
    this.bottomSheetRef.disableClose = true;
  }

  addVariant(): void {
    const variant: string = this.variant().value.toLowerCase();
    const answer = this.formGroup().get('answer')!.value.toLowerCase();
    const formArray: string[] = this.formArray().value;
    const isDouble: boolean = formArray.includes(variant);
    this.variant().reset();
    const confirmValue: boolean = isDouble || !variant || variant === answer;
    if (confirmValue) {
      return;
    }
    const formControl = new FormControl(variant);
    this.formArray().push(formControl);
  }

  close(event: MouseEvent): void {
    this.bottomSheetRef.dismiss(false);
    event.preventDefault();
  }
  submit() {
    this.verifyNeither();
    console.log('neither: ', this.formGroup());
    this.bottomSheetRef.dismiss(cloneForm(this.formGroup()));
  }

  reset() {
    clearFormGroup(this.formGroup());
    this.variant().reset();
  }

  removeVariant(index: number) {
    this.formArray().removeAt(index);
  }

  private verifyNeither() {
    const answer = <FormControl>this.formGroup().get('answer');
    if (this.formArray().value.includes(answer.value)) {
      return;
    }
    this.formArray().push(new FormControl(answer.value));
  }
}
