import {
  Component,
  computed,
  input,
  signal,
  Inject,
  OnInit,
} from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { Observable, zip } from 'rxjs';
import { tap, take, filter } from 'rxjs/operators';

import { MATERIAL_CONFIG_TOKEN, MaterialConfig } from '@/material.config';
import { SheetData } from '@admin/components/component.interface';
import {
  cloneForm,
  cloneAbstractControl,
  clearFormGroup,
} from '@utils/object.utils';
import { isFileExist } from '@utils/boolean.utils';
import { SheetDictionaryComponent } from '@admin/components/sheet-dictionary/sheet-dictionary.component';
import { FileDictionaryService } from './file-dictionary.service';

@Component({
  selector: 'comp-file-dictionary',
  templateUrl: './file-dictionary.component.html',
  styleUrl: './file-dictionary.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterLink,
    MatTooltipModule,
    MatBottomSheetModule,
    MatDividerModule,
    TitleCasePipe,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
  ],
  providers: [FileDictionaryService],
})
export class FileDictionaryComponent implements OnInit {
  formGroup = input<FormGroup>(new FormGroup({}));
  formArray = computed(
    () => this.formGroup().get('questionList') as FormArray<FormGroup>
  );
  formFieldsTitle = signal<string[]>(['tajik', 'russian', 'english']);
  isFileLoading = signal(false);

  private files = signal<File[]>([]);

  constructor(
    @Inject(MATERIAL_CONFIG_TOKEN) public materialConfig: MaterialConfig,
    private service: FileDictionaryService,
    private bottomSheet: MatBottomSheet,
    private fb: FormBuilder
  ) {}

  ngOnInit() {}

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

  reset() {
    clearFormGroup(this.formGroup());
  }
  private openBottomSheet(data?: SheetData): Observable<FormGroup> {
    if (!data) {
      data = {
        formGroup: this.fb.group({
          tajik: ['', [Validators.required]],
          russian: ['', [Validators.required]],
          english: ['', [Validators.required]],
        }),
        mode: 'add',
      };
    }
    const bottomSheet = this.bottomSheet.open(SheetDictionaryComponent, {
      data,
    });
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
    const observables: Observable<FormGroup[]>[] = [];
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

  private setFormArray(observables: Observable<FormGroup[]>[]) {
    zip(...observables)
      .pipe(take(1))
      .subscribe((next: FormGroup[][]) => {
        const formGroups: FormGroup[] = next.flat();
        formGroups.forEach(formGroup => {
          this.formArray().push(formGroup);
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
    if (!this.formArray().length) {
      this.files.set([]);
    }
  }
}
