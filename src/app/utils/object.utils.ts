import {
  FormGroup,
  FormControl,
  FormArray,
  AbstractControl,
} from '@angular/forms';

import { clearFormArray, arrayToFormArray } from '@utils/array.utils';
import { SIMPLE_TYPES } from '@constants/types.constants';

export function cloneForm<T extends FormGroup = FormGroup>(form: T): T {
  const copy = new FormGroup({});
  for (const key of Object.keys(form.value)) {
    const control = form.controls[key];
    copy.addControl(key, cloneAbstractControl(control));
  }
  return <T>copy;
}

export function cloneAbstractControl<T extends AbstractControl>(control: T): T {
  let newControl: T;

  if (control instanceof FormGroup) {
    const formGroup = new FormGroup(
      {},
      control.validator,
      control.asyncValidator
    );
    const controls = control.controls;

    Object.keys(controls).forEach(key => {
      formGroup.addControl(key, cloneAbstractControl(controls[key]));
    });

    newControl = formGroup as any;
  } else if (control instanceof FormArray) {
    const value: T[] = [];
    const formArray = new FormArray(
      value,
      control.validator,
      control.asyncValidator
    );

    control.controls.forEach(formControl => {
      formArray.push(cloneAbstractControl(formControl) as T);
    });

    newControl = formArray as any;
  } else if (control instanceof FormControl) {
    newControl = new FormControl(
      control.value,
      control.validator,
      control.asyncValidator
    ) as any;
  } else {
    throw new Error('Error: unexpected control value');
  }

  if (control.disabled) newControl.disable({ emitEvent: false });

  return newControl;
}

export function clearFormGroup(formGroup: FormGroup) {
  const controls = formGroup.controls;
  for (const key in controls) {
    if (controls[key] instanceof FormControl) {
      controls[key].reset();
    }
    if (controls[key] instanceof FormArray) {
      clearFormArray(<FormArray>controls[key]);
    }
    if (controls[key] instanceof FormGroup) {
      clearFormGroup(<FormGroup>controls[key]);
    }
  }
}

export function objectToFormGroup<T extends object>(
  data: T,
  formGroup: FormGroup = new FormGroup({})
): FormGroup {
  for (const key in data) {
    const value = data[key];
    const type: string = typeof value;
    if (SIMPLE_TYPES.includes(type)) {
      let formControl = <FormControl>formGroup.get(key);
      if (!formControl) {
        formGroup.setControl(key, new FormControl(data[key]));
        formControl = <FormControl>formGroup.get(key);
      }
      formControl.patchValue(value);
    } else if (Array.isArray(value)) {
      let formArray = <FormArray>formGroup.get(key);
      if (!formArray) {
        formGroup.setControl(key, new FormArray([]));
        formArray = <FormArray>formGroup.get(key);
      }
      arrayToFormArray(value, formArray);
    } else if (typeof value === 'object') {
      let _formGroup = <FormGroup>formGroup.get(key);
      if (!_formGroup) {
        formGroup.setControl(key, new FormGroup({}));
        _formGroup = <FormGroup>formGroup.get(key);
      }
      objectToFormGroup(<object>value, _formGroup);
    }
  }
  return formGroup;
}
