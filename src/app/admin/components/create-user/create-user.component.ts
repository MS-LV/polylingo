import { Component, signal, OnInit, OnDestroy, Inject, computed } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
} from '@angular/forms';
import { TitleCasePipe } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { MATERIAL_CONFIG_TOKEN, MaterialConfig } from '@/material.config';
import { UsersFormGroup } from '@admin/admin.interface';
import { clearFormGroup } from '@utils/object.utils';
import { fileUrl } from '@utils/text.utils';
import {EMAIL_TYPES} from '@constants/form.constants';
import { Roles, Levels } from '@constants/enum.constants';
import { USERS_FORM_CONFIG_TOKEN, UsersFormConfig } from '@configs/users.configs';
import { DialogData } from '@admin/components/component.interface';
import { FileDictionaryComponent } from '@admin/components/file-dictionary/file-dictionary.component';

@Component({
  selector: 'comp-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
  standalone: true,
  imports: [
    TitleCasePipe,
    FormsModule,

    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatTooltipModule,
    MatSelectModule,
    MatFormFieldModule,

    FileDictionaryComponent,
  ],
  providers: [],
})
export class CreateUserComponent implements OnInit, OnDestroy {
  formGroup = computed(
    () => <FormGroup<UsersFormGroup>>this.dialogData.formGroup
  );
  formAvatar = computed(
    () => <FormControl<File>>this.formGroup().get('avatar')
  );
  formEmail = computed(() => <FormControl>this.formGroup().get('email'));
  Object = Object;
  roles = signal(Roles);
  levels = signal(Levels);
  avatarUrl = signal('');
  isHide = signal(true);
  emailTypes = signal(EMAIL_TYPES);
  emailField = signal(['']);

  constructor(
    @Inject(MATERIAL_CONFIG_TOKEN) public materialConfig: MaterialConfig,
    @Inject(USERS_FORM_CONFIG_TOKEN) public usersFormConfig: UsersFormConfig,
    @Inject(MAT_DIALOG_DATA) private dialogData: DialogData
  ) { }

  ngOnInit(): void {
  }

  get avatarName(): string {
    if (!this.formAvatar() ?.value ?.name) {
      return '';
    }
    return this.formAvatar().value.name ?? '';
  }

  onEmailInput(): void {
    const email = this.formGroup().get('email')!.value;
    if (!email) {
      this.emailField.set(['']);
      return;
    }
    const emailName = <string[]>this.formGroup()
      .get('email')!
      .value!.match(new RegExp(/^\w+/));
    this.emailField.set(emailName);
  }

  onInputFileChange(input: HTMLInputElement): void {
    const fileList = input.files;
    if (!fileList ?.item(0)) {
      return;
    }
    const file = fileList.item(0)!;

    this.formAvatar().patchValue(file);
    this.avatarUrl.set(fileUrl(this.formAvatar().value));
    console.log('file: ', this.formGroup().value);
  }

  onSubmit(): void { }

  reset() {
    clearFormGroup(this.formGroup());
  }
  
  ngOnDestroy() {
    clearFormGroup(this.formGroup());
  }
}
