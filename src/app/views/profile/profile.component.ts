import {
  Component,
  signal,
  OnInit,
  OnDestroy,
  Inject,
  computed,
} from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import {
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { Subject } from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import { UsersFormConfig, USERS_FORM_CONFIG_TOKEN } from '@configs/users.configs';
import { fileUrl } from '@utils/text.utils';
import { MATERIAL_CONFIG_TOKEN, MaterialConfig } from '@/material.config';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Roles, Levels } from '@constants/enum.constants';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    ClipboardModule,
    MatTooltipModule,
    MatSelectModule,
    FormsModule,
    TitleCasePipe,
    ReactiveFormsModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit, OnDestroy {
  formGroup = signal<FormGroup>(new FormGroup({}));
  emailTypes = signal([
    {
      name: 'Gmail',
      value: '@gmail.com',
    },
    {
      name: 'Email',
      value: '@email.ru',
    },
  ]);
  destroy$ = signal(new Subject<boolean>());
  emailField = signal(['']);
  coverUrl = signal('');
  isReadOnly = signal(true);
  isFormChanges = signal(false);
  isHide = signal(true);
  roles = signal(Roles);
  levels = signal(Levels);
  formCoverFile = computed(
    () => <FormControl<File>>this.formGroup().get('avatar')
  );
  Object = Object;

  constructor(
    @Inject(USERS_FORM_CONFIG_TOKEN) public usersFormConfig: UsersFormConfig,
    @Inject(MATERIAL_CONFIG_TOKEN) public materialConfig: MaterialConfig
  ) {}

  get coverFileName(): string {
    return this.formCoverFile().value.name ?? '';
  }

  ngOnInit() {
    this.formGroupInit();
    this.formGroup().valueChanges
    .pipe(takeUntil(this.destroy$()))
    .subscribe(() => {
      this.isFormChanges.set(true);
    });
  }

  onEmailInput(): void {
    const email = this.formGroup().get('email')!.value;
    if (!email) {
      this.emailField.set(['']);
      return;
    }
    const emailName = this.formGroup()
      .get('email')!
      .value!.match(new RegExp(/^\w+/)) as string[];
    this.emailField.set(emailName);
  }

  onInputFileChange(input: HTMLInputElement): void {
    const fileList = input.files;
    if (!fileList?.item(0)) {
      return;
    }
    const file = fileList.item(0)!;

    this.formCoverFile().patchValue(file);
    this.coverUrl.set(fileUrl(this.formCoverFile().value));
    console.log('file: ', this.formGroup().value);
  }

  ngOnDestroy() {
    this.destroy$().next(true);
  }

  private formGroupInit() {
    const formGroup = new FormGroup({
      avatar: new FormControl(''),
      fullName: new FormControl('Jamoliddin Qodirov', [
        Validators.required,
        Validators.minLength(this.usersFormConfig.fullName.min),
        Validators.maxLength(this.usersFormConfig.fullName.max),
      ]),
      email: new FormControl('jqodirov@gmail.com', [
        Validators.required,
        Validators.email,
        Validators.minLength(this.usersFormConfig.email.min),
        Validators.maxLength(this.usersFormConfig.email.max),
      ]),
      description: new FormControl('Description about student', [
        Validators.max(this.usersFormConfig.description.max),
      ]),
      password: new FormControl('325544', [
        Validators.required,
        Validators.minLength(this.usersFormConfig.password.min),
        Validators.maxLength(this.usersFormConfig.password.max),
      ]),
      role: new FormControl(Roles.STUDENT, [Validators.required]),
      level: new FormControl(Levels.BEGINNER, [Validators.required]),
    });
    this.formGroup.set(formGroup);
  }
}
