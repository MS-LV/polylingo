import { FormGroup, FormArray } from '@angular/forms';

export interface ParsedExcel {
  formGroups: FormGroup[];
  readTexts: FormArray;
}
