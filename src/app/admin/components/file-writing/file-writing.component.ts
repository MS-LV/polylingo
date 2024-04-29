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
  FormArray,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
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
import { WritingSheetData } from '@admin/components/component.interface';
import { cloneAbstractControl, clearFormGroup } from '@utils/object.utils';
import { isFileExist } from '@utils/boolean.utils';
import { SheetWritingComponent } from '@admin/components/sheet-writing/sheet-writing.component';
import { FileWritingService } from './file-writing.service';

@Component({
  selector: 'comp-file-writing',
  templateUrl: './file-writing.component.html',
  styleUrl: './file-writing.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    MatBottomSheetModule,
    MatTooltipModule,
    MatDividerModule,
    MatProgressSpinnerModule,
  ],
  providers: [FileWritingService],
})
export class FileWritingComponent implements OnInit {
  formGroup = input<FormGroup>(new FormGroup({}));
  formArray = computed(() => this.formGroup().get('themes') as FormArray);
  isFileLoading = signal(false);

  private files = signal<File[]>([]);

  constructor(
    @Inject(MATERIAL_CONFIG_TOKEN) public materialConfig: MaterialConfig,
    private service: FileWritingService,
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
        filter((formControl: FormControl) => !!formControl),
        tap((formControl: FormControl) => {
          this.formArray().push(formControl);
        })
      )
      .subscribe();
  }

  updateTheme(index: number) {
    const currentFormControl = this.formArray().get('' + index) as FormControl;
    const cloneFormControl = cloneAbstractControl(currentFormControl);
    const data: WritingSheetData = {
      formControl: cloneFormControl,
      mode: 'update',
    };
    this.openBottomSheet(data)
      .pipe(
        take(1),
        filter((formControl: FormControl) => !!formControl),
        tap((formControl: FormControl) => {
          this.updateFormControls(index, formControl);
        })
      )
      .subscribe();
  }

  removeTheme(index: number) {
    this.formArray().removeAt(index);
  }

  reset() {
    clearFormGroup(this.formGroup());
  }

  private openBottomSheet(data?: WritingSheetData): Observable<FormControl> {
    if (!data) {
      data = {
        formControl: this.fb.control('', Validators.required),
        mode: 'add',
      };
    }
    const bottomSheet = this.bottomSheet.open(SheetWritingComponent, { data });
    return bottomSheet.afterDismissed();
  }

  private updateFormControls(index: number, formControl: FormControl) {
    // const currentFormControl = <FormControl>this.formArray()!.get('' + index);
    this.formArray().setControl(index, cloneAbstractControl(formControl));
  }

  private readFile(fileList: FileList) {
    const observables: Observable<FormControl[]>[] = [];
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

  private setFormArray(observables: Observable<FormControl[]>[]) {
    zip(...observables)
      .pipe(take(1))
      .subscribe((next: FormControl[][]) => {
        const formControls: FormControl[] = next.flat();
        console.log('next: ', formControls);
        formControls.forEach(formGroup => {
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
