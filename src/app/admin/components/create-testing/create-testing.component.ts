import { Component, signal, OnInit, Inject, computed } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MATERIAL_CONFIG_TOKEN, MaterialConfig } from '@/material.config';
import { TestingFormGroup } from '@admin/admin.interface';
import { clearFormGroup } from '@utils/object.utils';
import { fileUrl } from '@utils/text.utils';
import { DialogData } from '@admin/components/component.interface';
import { Activities } from '@constants/enum.constants';
import { activitiesExpansion } from './create-testing.data';
import { CreateTestingService } from './create-testing.service';

@Component({
  selector: 'comp-create-testing',
  templateUrl: './create-testing.component.html',
  styleUrl: './create-testing.component.scss',
  standalone: true,
  imports: [
    NgComponentOutlet,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatTooltipModule,
  ],
  providers: [CreateTestingService],
})
export class CreateTestingComponent implements OnInit {
  Activities = signal(Activities);
  formGroup = computed(
    () => this.dialogData.formGroup as FormGroup<TestingFormGroup>
  );
  formAvatar = computed(
    () => this.formGroup().get('avatar') as FormControl<File>
  );
  activitiesExpansion = computed(() => activitiesExpansion(this.formGroup()));
  avatarUrl = signal('');

  constructor(
    @Inject(MAT_DIALOG_DATA) private dialogData: DialogData,
    @Inject(MATERIAL_CONFIG_TOKEN) public materialConfig: MaterialConfig
    // private service: CreateTestingService
  ) { }

  get avatarName(): string {
    if (!this.formAvatar() ?.value ?.name) {
      return '';
    }
    return this.formAvatar().value.name;
  }

  ngOnInit(): void {
  }

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