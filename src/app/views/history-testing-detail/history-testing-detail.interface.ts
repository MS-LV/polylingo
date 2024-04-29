import {FormGroup} from '@angular/forms';
import { ComponentType } from '@angular/cdk/overlay';

export interface ResultActivity {
	title: string;
	component: ComponentType<any>;
	inputs: {formGroup: FormGroup};
}