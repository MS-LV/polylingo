import {
  FormGroup,
  FormControl,
  FormArray,
  AbstractControl,
} from '@angular/forms';

export interface RoutesPath {
  title: string;
  path: string;
  data: { icon: string };
}

export interface Ranger {
  min: number;
  max: number;
}

export type FormRawValue<T extends AbstractControl> =
  T extends AbstractControl < any, infer TRawValue > ? TRawValue : never;

export type Controls<TAbstractControl> =
  TAbstractControl extends FormGroup < infer TControls >
    ? {
      [K in keyof TControls]: TControls[K];
    }
    : TAbstractControl extends FormArray < infer TControls >
      ? TControls[]
      : TAbstractControl extends FormControl
        ? TAbstractControl
        : any;

export type ModelFormGroup<T> = FormGroup<{
  [K in keyof T]: FormControl<T[K]>;
}>;

