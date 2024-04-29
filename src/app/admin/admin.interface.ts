import { FormGroup, FormControl, FormArray } from '@angular/forms';

import { FormRawValue } from '@/app.interface';
import {
  GrammarFormGroup,
  ReadingFormGroup,
  ListeningFormGroup,
  DictionaryFormGroup,
  WritingFormGroup,
} from '@admin/components/component.interface';
import { Activities } from '@constants/enum.constants';

export interface TestingFormGroup {
  avatar: FormControl<string | File | null>;
  label: FormControl<string | null>;
  description: FormControl<string | null>;
  [Activities.GRAMMAR]: FormGroup<GrammarFormGroup>;
  [Activities.READING]: FormGroup<ReadingFormGroup>;
  [Activities.LISTENING]: FormGroup<ListeningFormGroup>;
  [Activities.DICTIONARY]: FormGroup<DictionaryFormGroup>;
  [Activities.WRITING]: FormGroup<WritingFormGroup>;
}

export interface EverydayFormGroup {
  avatar: FormControl<File | string | null>;
  label: FormControl<string | null>;
  description: FormControl<string | null>;
  fileName: FormControl<string | null>;
  questionList: FormArray;
}

export interface UsersFormGroup {
  avatar: FormControl<File | string | null>;
  fullName: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  role: FormControl<string | null>;
  level: FormControl<string | null>;
  description: FormControl<string | null>;
}

//---------------------------------------------

export type EverydayDocument = FormRawValue<FormGroup<EverydayFormGroup>> & {
  _id: string | number;
};
export type UsersDocument = FormRawValue<FormGroup<UsersFormGroup>> & {
  _id: string | number;
};
export type TestingDocument = FormRawValue<FormGroup<TestingFormGroup>> & {
  _id: string | number;
};


// ---------------------------------------------------------------

export interface TestingHistory extends TestingDocument {
  [Activities.WRITING]: FormRawValue<FormGroup<WritingFormGroup>> & {theme: string, assay: string};
}

export interface EverydayHistory extends EverydayDocument {
}