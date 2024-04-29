import { Component, signal, OnInit, OnDestroy, Inject, computed } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MATERIAL_CONFIG_TOKEN, MaterialConfig } from '@/material.config';
import { EverydayFormGroup } from '@admin/admin.interface';
import { clearFormGroup } from '@utils/object.utils';
import { fileUrl } from '@utils/text.utils';
import { FileDictionaryComponent } from '@admin/components/file-dictionary/file-dictionary.component';
import { DialogData } from '@admin/components/component.interface';

@Component({
  selector: 'comp-create-everyday',
  templateUrl: './create-everyday.component.html',
  styleUrl: './create-everyday.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatTooltipModule,

    FileDictionaryComponent,
  ],
  providers: [],
})
export class CreateEverydayComponent implements OnInit, OnDestroy {
  formGroup = computed(
    () => <FormGroup<EverydayFormGroup>>this.dialogData.formGroup
  );
  formAvatar = computed(
    () => <FormControl<File>>this.formGroup().get('avatar')
  );
  avatarUrl = signal('');

  constructor(
    @Inject(MAT_DIALOG_DATA) private dialogData: DialogData,
    @Inject(MATERIAL_CONFIG_TOKEN) public materialConfig: MaterialConfig
  ) { }

  get avatarName(): string {
    if (!this.formAvatar() ?.value ?.name) {
      return '';
    }
    return this.formAvatar().value.name;
  }

  ngOnInit(): void { }

  onInputFileChange(input: HTMLInputElement): void {
    const fileList = input.files;
    if (!fileList ?.item(0)) {
      return;
    }
    const file = fileList.item(0)!;
    this.formAvatar().patchValue(file);
    this.avatarUrl.set(fileUrl(this.formAvatar().value));
  }
  onSubmit(): void {
  }

  reset() {
    clearFormGroup(this.formGroup());
  }

  ngOnDestroy() {
    clearFormGroup(this.formGroup());
  }
}
