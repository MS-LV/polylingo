import {FormGroup, FormArray, FormControl, Validators} from '@angular/forms';

import { TestingFormGroup, EverydayFormGroup } from '@admin/admin.interface';
import {
  GrammarFormGroup,
  GrammarQuestionForm,
  ReadingFormGroup,
  ListeningFormGroup,
  DictionaryFormGroup,
  DictionaryQuestionForm,
  WritingFormGroup,
} from '@admin/components/component.interface';
import { UsersFormGroup } from '@admin/admin.interface';
import { Activities } from '@constants/enum.constants';
import {Levels, Roles} from '@constants/enum.constants';
import {USERS_FORM_CONFIG} from '@configs/users.configs';
import { SETTING_FORM_CONFIG } from '@configs/setting.configs';


export const TESTING_FORM_GROUP: FormGroup<TestingFormGroup> = new FormGroup<TestingFormGroup>({
  avatar: new FormControl(),
  label: new FormControl('', [Validators.required]),
  description: new FormControl(''),
  [Activities.GRAMMAR]: new FormGroup<GrammarFormGroup>({
    fileName: new FormControl(''),
    questionList: new FormArray<FormGroup<GrammarQuestionForm>>(
      [],
      [Validators.required]
    ),
  }),
  [Activities.READING]: new FormGroup<ReadingFormGroup>({
    readTexts: new FormArray<FormControl<string | null>>(
      [],
      Validators.required
    ),
    fileName: new FormControl(''),
    questionList: new FormArray<FormGroup<GrammarQuestionForm>>(
      [],
      [Validators.required]
    ),
  }),
  [Activities.LISTENING]: new FormGroup<ListeningFormGroup>({
    audios: new FormArray<FormControl<File | string>>(
      [],
      [Validators.required]
    ),
    fileName: new FormControl(''),
    questionList: new FormArray<FormGroup<GrammarQuestionForm>>(
      [],
      [Validators.required]
    ),
  }),
  [Activities.DICTIONARY]: new FormGroup<DictionaryFormGroup>({
    fileName: new FormControl(''),
    questionList: new FormArray<FormGroup<DictionaryQuestionForm>>(
      [],
      [Validators.required]
    ),
  }),
  [Activities.WRITING]: new FormGroup<WritingFormGroup>({
    fileName: new FormControl<string | null>(''),
    themes: new FormArray<FormControl<string | null>>([]),
  }),
});

export const EVERYDAY_FORM_GROUP: FormGroup<EverydayFormGroup> = new FormGroup<EverydayFormGroup>({
  avatar: new FormControl(''),
  label: new FormControl('', [Validators.required]),
  description: new FormControl(''),
  fileName: new FormControl(''),
  questionList: new FormArray<FormGroup>([], [Validators.required]),
});

export const PROFILE_FORM_GROUP: FormGroup<UsersFormGroup> = new FormGroup<UsersFormGroup>({
  avatar: new FormControl(''),
  fullName: new FormControl('Jamoliddin Qodirov', [
    Validators.required,
    Validators.minLength(USERS_FORM_CONFIG.fullName.min),
    Validators.maxLength(USERS_FORM_CONFIG.fullName.max),
  ]),
  email: new FormControl('jqodirov@gmail.com', [
    Validators.required,
    Validators.email,
    Validators.minLength(USERS_FORM_CONFIG.email.min),
    Validators.maxLength(USERS_FORM_CONFIG.email.max),
  ]),
  description: new FormControl('Description about student', [
    Validators.max(USERS_FORM_CONFIG.description.max),
  ]),
  password: new FormControl('325544', [
    Validators.required,
    Validators.minLength(USERS_FORM_CONFIG.password.min),
    Validators.maxLength(USERS_FORM_CONFIG.password.max),
  ]),
  role: new FormControl(Roles.STUDENT, [Validators.required]),
  level: new FormControl(Levels.BEGINNER, [Validators.required]),
});

export const SETTING_FORM_GROUP = new FormGroup({
  dictionaryTime: new FormControl(0, [
    Validators.min(SETTING_FORM_CONFIG.dictionaryTime.min),
    Validators.max(SETTING_FORM_CONFIG.dictionaryTime.max),
  ]),
  dictionaryPassingScore: new FormControl(0, [
    Validators.min(SETTING_FORM_CONFIG.dictionaryPassingScore.min),
    Validators.max(SETTING_FORM_CONFIG.dictionaryPassingScore.max),
  ]),
  testingTime: new FormControl(0, [
    Validators.min(SETTING_FORM_CONFIG.testingTime.min),
    Validators.max(SETTING_FORM_CONFIG.testingTime.max),
  ]),
  testingPassingScore: new FormControl(0, [
    Validators.min(SETTING_FORM_CONFIG.testingPassingScore.min),
    Validators.max(SETTING_FORM_CONFIG.testingPassingScore.max),
  ]),
  writingSymbolLength: new FormControl(0, [
    Validators.min(SETTING_FORM_CONFIG.writingSymbolLength.min),
    Validators.max(SETTING_FORM_CONFIG.writingSymbolLength.max),
  ]),
  blockQuizeTime: new FormControl(0, [
    Validators.min(SETTING_FORM_CONFIG.blockQuizeTime.min),
    Validators.max(SETTING_FORM_CONFIG.blockQuizeTime.max),
  ]),
  listeningAudioReplay: new FormControl(0, [
    Validators.min(SETTING_FORM_CONFIG.listeningAutioReplay.min),
    Validators.max(SETTING_FORM_CONFIG.listeningAutioReplay.max),
  ]),
  specialPassword: new FormControl('', [
    Validators.minLength(SETTING_FORM_CONFIG.specialPassword.min),
    Validators.maxLength(SETTING_FORM_CONFIG.specialPassword.max),
    Validators.required,
  ]),
});

export const EMAIL_TYPES = [
  {
    name: 'Gmail',
    value: '@gmail.com',
  },
  {
    name: 'Email',
    value: '@email.ru',
  },
]