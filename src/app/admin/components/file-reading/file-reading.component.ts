import {
  Component,
  input,
  OnInit,
  Inject,
  computed,
  signal,
} from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { Observable, zip } from 'rxjs';
import { take, tap, filter } from 'rxjs/operators';

import { MATERIAL_CONFIG_TOKEN, MaterialConfig } from '@/material.config';
import { SheetData } from '@admin/components/component.interface';
import {
  cloneForm,
  cloneAbstractControl,
  clearFormGroup,
} from '@utils/object.utils';
import { isFileExist } from '@utils/boolean.utils';
import { SheetGrammarComponent } from '@admin/components/sheet-grammar/sheet-grammar.component';
import { FileReadingService } from './file-reading.service';
import { ParsedExcel } from './file-reading.interface';

@Component({
  selector: 'comp-reading-grammar',
  templateUrl: './file-reading.component.html',
  styleUrl: './file-reading.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterLink,
    MatRadioModule,
    ReactiveFormsModule,
    MatBottomSheetModule,
    MatTooltipModule,
    MatDividerModule,
    MatProgressSpinnerModule,
  ],
  providers: [FileReadingService],
})
export class FileReadingComponent implements OnInit {
  formGroup = input<FormGroup>(new FormGroup({}));
  formParagraphs = computed(
    () => <FormArray<FormControl>>this.formGroup().get('readTexts')
  );
  formArray = computed(
    () => this.formGroup().get('questionList') as FormArray<FormGroup>
  );
  formNewParagraph = signal<FormControl>(
    new FormControl('', [Validators.required])
  );
  isFileLoading = signal(false);

  private files = signal<File[]>([]);

  constructor(
    @Inject(MATERIAL_CONFIG_TOKEN) public materialConfig: MaterialConfig,
    private service: FileReadingService,
    private bottomSheet: MatBottomSheet,
    private fb: FormBuilder
  ) {}

  ngOnInit() {}
  getNeitherField(formGroup: FormGroup): string[] {
    const neither = formGroup.get('neither');
    if (!neither) {
      return [];
    }
    return neither.value as string[];
  }
  onInputFileChange(input: HTMLInputElement): void {
    const fileList = input.files;
    if (!fileList?.length) {
      return;
    }
    this.readFile(fileList);
  }
  addQuestion() {
    this.openBottomSheet()
      .pipe(
        take(1),
        filter((formGroup: FormGroup) => !!formGroup),
        tap((formGroup: FormGroup) => {
          this.formArray().push(formGroup);
        })
      )
      .subscribe();
  }

  addParagraph() {
    const formNewParagraph2 = cloneAbstractControl(this.formNewParagraph());
    this.formNewParagraph().reset();
    this.formParagraphs().push(formNewParagraph2);
  }

  updateQuestion(index: number) {
    const currentFormGroup = this.formArray().get('' + index) as FormGroup;
    const cloneFormGroup = cloneForm(currentFormGroup);
    const data = {
      formGroup: cloneFormGroup,
      mode: 'update',
    };
    this.openBottomSheet(data)
      .pipe(
        take(1),
        filter((formGroup: FormGroup) => !!formGroup),
        tap((formGroup: FormGroup) => {
          this.updateFormControls(index, formGroup);
        })
      )
      .subscribe();
  }

  removeQuestion(index: number) {
    this.formArray().removeAt(index);
  }

  removePragraph(index: number) {
    this.formParagraphs().removeAt(index);
  }

  reset() {
    clearFormGroup(this.formGroup());
  }

  private openBottomSheet(data?: SheetData): Observable<FormGroup> {
    if (!data) {
      data = {
        formGroup: this.fb.group({
          description: ['', [Validators.required]],
          answer: ['', [Validators.required]],
          neither: this.fb.array([], [Validators.required]),
        }),
        mode: 'add',
      };
    }
    const bottomSheet = this.bottomSheet.open(SheetGrammarComponent, { data });
    return bottomSheet.afterDismissed();
  }

  private updateFormControls(index: number, formGroup: FormGroup) {
    const currentFormGroup = this.formArray().get('' + index) as FormGroup;
    for (const key of Object.keys(formGroup.value)) {
      const control = formGroup.controls[key];
      currentFormGroup.setControl(key, cloneAbstractControl(control));
    }
  }

  private readFile(fileList: FileList) {
    const observables: Observable<ParsedExcel>[] = [];
    const filesName: string[] = [];
    this.cleanFiles();
    this.isFileLoading.set(true);
    for (const key in fileList) {
      if (fileList[key] instanceof File) {
        const isSameFile = isFileExist(fileList[key], this.files());
        if (isSameFile) {
          continue;
        }
        this.files.update((files: File[]) => [...files, fileList[key]]);
        filesName.push(fileList[key].name);
        observables.push(this.service.excelFormGroup(fileList[key]));
      }
    }
    this.setFormArray(observables);
    this.setFilesName(filesName);
  }

  private setFormArray(observables: Observable<ParsedExcel>[]) {
    zip(...observables)
      .pipe(take(1))
      .subscribe((parsedExcels: ParsedExcel[]) => {
        parsedExcels.forEach(parsedExcel => {
          const readTexts = parsedExcel.readTexts.controls as FormControl[];
          readTexts.forEach(paragraph => {
            this.formParagraphs().push(paragraph);
          });
          parsedExcel.formGroups.forEach(formGroup => {
            this.formArray().push(formGroup);
          });
        });
        this.isFileLoading.set(false);
      });
  }

  private setFilesName(files: string[]) {
    const filesName = this.formGroup().get('fileName');
    if (filesName?.value?.trim()) {
      files.push(filesName.value);
    }
    filesName?.patchValue(files.join(', '));
  }

  private cleanFiles() {
    if (this.formArray().length < 1) {
      this.files.set([]);
    }
  }
}
