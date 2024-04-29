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
  FormArray,
  FormControl,
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

import { Observable, zip } from 'rxjs';
import { take, tap, filter } from 'rxjs/operators';

import { MATERIAL_CONFIG_TOKEN, MaterialConfig } from '@/material.config';
import { SheetData } from '@admin/components/component.interface';
import {
  cloneForm,
  cloneAbstractControl,
  clearFormGroup,
} from '@utils/object.utils';
import { fileUrl } from '@utils/text.utils';
import { isFileExist } from '@utils/boolean.utils';
import { requiredFileType } from '@utils/validator.utils';
import { SheetGrammarComponent } from '@admin/components/sheet-grammar/sheet-grammar.component';
import { FileListeningService } from './file-listening.service';

@Component({
  selector: 'comp-file-listening',
  templateUrl: './file-listening.component.html',
  styleUrl: './file-listening.component.scss',
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
  ],
  providers: [FileListeningService],
})
export class FileListeningComponent implements OnInit {
  formGroup = input<FormGroup>(new FormGroup({}));
  formAudios = computed(
    () =>
      this.formGroup().get('audios') as FormArray<
        FormControl<File | string | null>
      >
  );
  formArray = computed(
    () => this.formGroup().get('questionList') as FormArray<FormGroup>
  );
  audiosUrl = signal<string[]>([]);
  isFileLoading = signal(false);

  private files = signal<File[]>([]);
  private audioFiles = signal<File[]>([]);

  constructor(
    @Inject(MATERIAL_CONFIG_TOKEN) public materialConfig: MaterialConfig,
    private service: FileListeningService,
    private bottomSheet: MatBottomSheet,
    private fb: FormBuilder
  ) {}
  get audioFilesName(): string {
    return this.formAudios()
      .value.map(file => (typeof file !== 'string' ? file?.name : ''))
      .join(', ');
  }

  ngOnInit() {
    this.firstInitFiles();
  }

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

  onAudioInputChange(input: HTMLInputElement) {
    const fileList = input.files;
    if (!fileList?.length) {
      return;
    }
    this.readAudioFile(fileList);
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
        this.files().push(fileList[key]);
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

  private setAudioFilesName(files: string[]) {
    const filesName = this.formGroup().get('audioFileName');
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

  private readAudioFile(fileList: FileList) {
    let i = 0;
    const filesName: string[] = [];
    while (fileList.item(i)) {
      const file = fileList.item(i)!;
      const isSameFile = isFileExist(file, this.audioFiles());
      if (!file || isSameFile) {
        i++;
        continue;
      }
      filesName.push(file.name);
      this.audioFiles().push(file);
      this.formAudios().push(this.fb.control(file, requiredFileType('mp3')));
      this.audiosUrl().push(fileUrl(file));

      i++;
    }
    this.setAudioFilesName(filesName);
  }

  private firstInitFiles() {
    const audios = this.formAudios().value as string[];
    if (!audios || audios.length <= 0) {
      return;
    }
    audios.forEach(audio => {
      this.audiosUrl.update(items => [audio, ...items]);
    });
  }
}
