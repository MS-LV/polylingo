import { FormGroup } from '@angular/forms';

import { ComponentType } from '@angular/cdk/overlay';

import {Activities} from '@constants/enum.constants';
import {ActivityMessageType} from './testing.constants';

export interface ActivityOutputMessage {
  activity: Activities;
  type: ActivityMessageType;
}


export interface TestingStep {
  _id: string | number;
  label: string;
  component: ComponentType<any>;
  inputs: {
    formGroup: FormGroup;
    document: any;
  };
}
