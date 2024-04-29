import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { FormRawValue, Controls } from '@/app.interface';

export interface DialogData {
  formGroup: FormGroup;
}

export type FileDictionary = FormRawValue<FormGroup<DictionaryQuestionForm>>;
export type FileGrammar = FormRawValue<FormGroup<GrammarQuestionForm>>;

export type FileReading = FileGrammar & {
  text: string;
};

export type FileWriting = FormRawValue<FormGroup<WritingQuestionForm>>;

export interface SheetData {
  mode: string;
  formGroup: FormGroup;
}

export interface WritingSheetData {
  mode: string;
  formControl: FormControl;
}

export interface WritingQuestionForm {
  theme: FormControl<string | null>;
}

export interface GrammarQuestionForm {
  description: FormControl<string | null>;
  answer: FormControl<string | null>;
  neither: FormArray<FormControl<string | null>>;
}

export interface DictionaryQuestionForm {
  tajik: FormControl<string | null>;
  russian: FormControl<string | null>;
  english: FormControl<string | null>;
}

//------

export interface GrammarFormGroup {
  fileName: FormControl<string | null>;
  questionList: Controls<GrammarQuestionForm>;
}

export interface ReadingFormGroup extends GrammarFormGroup {
  readTexts: Controls<string | null>;
}

export interface ListeningFormGroup extends GrammarFormGroup {
  audios: Controls<File | string>;
}

export interface DictionaryFormGroup extends GrammarFormGroup {
  questionList: Controls<DictionaryQuestionForm>;
}

export interface WritingFormGroup {
  fileName: FormControl<string | null>;
  themes: Controls<WritingQuestionForm>;
}

//----------------------------------------------------------------------------

export type GrammarQuestionDocument = FormRawValue<FormGroup<GrammarQuestionForm>> & {userAnswer: string};
export type DictionaryQuestionDocument = FormRawValue<FormGroup<DictionaryQuestionForm>> & {userAnswer: string};

//------------------------------------------------------------------------------

export type GrammarDocument = FormRawValue<FormGroup<GrammarFormGroup>> & {
  _id: string | number;
};
export type ReadingDocument = FormRawValue<FormGroup<ReadingFormGroup>> & {
  _id: string | number;
};
export type ListeningDocument = FormRawValue<FormGroup<ListeningFormGroup>> & {
  _id: string | number;
};
export type DictionaryDocument = FormRawValue<FormGroup<DictionaryFormGroup>> & {
  _id: string | number;
};
export type WritingDocument = FormRawValue<FormGroup<WritingFormGroup>> & {
  _id: string | number;
};
//---------------------------------------------------------------------------
