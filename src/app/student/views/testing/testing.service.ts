import { Injectable } from '@angular/core';
import {FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';

import {Activities} from '@constants/enum.constants';
import { shuffle } from '@utils/array.utils';
import { SETTING_FORM_CONFIG} from '@configs/setting.configs';

@Injectable()
export class TestingService {
  constructor(
    private fb: FormBuilder
  ) {}

  prepareFormGroup(formGroup: FormGroup): FormGroup {
    const activities = Object.values(Activities);
    for(const activity of activities) {
      const formGroupActivity = <FormGroup>formGroup.get(activity);
      if(!formGroupActivity) {
        continue;
      }
      const formArrayActivity = <FormArray<FormGroup>>formGroupActivity.get('questionList');
      if(!formArrayActivity) {
        continue;
      }
      this.addUserAnswer('userAnswer', formArrayActivity!);
    }
    this.writingFormGroupInit(formGroup);
    return formGroup;
  }

  private addUserAnswer(name: string, formArray: FormArray<FormGroup>): void {
    formArray.controls.forEach((formGroup: FormGroup) => {
      const control = this.fb.control('', [Validators.required]);
      formGroup.addControl(name, control);
      const neither = <FormArray>formGroup.get('neither');
      if(!neither) {
        return;
      }
      neither.controls = shuffle(neither.controls);
    })
  }

  private writingFormGroupInit(formGroup: FormGroup) {
    const writing = <FormGroup>formGroup.get(Activities.WRITING);
    writing.addControl('theme', this.fb.control('', [Validators.required]));
    writing.addControl('assay', this.fb.control('', 
      [
        Validators.required,
        Validators.minLength(SETTING_FORM_CONFIG.writingSymbolLength.min),
        Validators.maxLength(SETTING_FORM_CONFIG.writingSymbolLength.max)
      ])
    );
  }
}
