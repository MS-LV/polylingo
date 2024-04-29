import { FormGroup } from '@angular/forms';
import { ComponentType } from '@angular/cdk/overlay';

export interface CreateTestingExpansion {
  id: string | number;
  title: string;
  description: string;
  component: ComponentType<any>;
  inputs: {
    formGroup: FormGroup;
  };
}
