import * as XLSX from 'xlsx';

import { FormArray, FormControl, AbstractControl } from '@angular/forms';

import { Observable, Subscriber } from 'rxjs';

import { SIMPLE_TYPES, ENUMARABLE_TYPES } from '@constants/types.constants';
import { objectToFormGroup } from '@utils/object.utils';
import { formatString } from '@utils/text.utils';

export function excelDataPrepare(data: string[][], fields: string[]): object[] {
  const result: object[] = [];
  data = data.filter(item => item.length > 0);
  fields = fields.map(v => v.toLocaleLowerCase());
  const header = data.shift() ?.map(v => v.toLowerCase());
  const isHasFields = fields.every(v => header ?.includes(v));
  if (!isHasFields) {
    return [];
  }
  data.forEach(doc => {
    const line: any = {};
    header ?.forEach(title => {
      // line[title] = doc[index];
      line[title] = doc.shift();
      line.neither = [...doc];
    });
    result.push(line);
  });
  return result;
}

export function parseExcel(file: File): Observable<string[][]> {
  const reader: FileReader = new FileReader();
  reader.readAsBinaryString(file);
  return new Observable((subs: Subscriber<any[][]>) => {
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      const data: any[][] = XLSX.utils.sheet_to_json(ws, { header: 1 });
      subs.next(data);
    };
  });
}

export function formatItems(array: (string | null)[]): string[] {
  array = array.filter(Boolean) as string[];
  let cloneArray = JSON.parse(JSON.stringify(array)) as string[];
  cloneArray = array.map(item => {
    return formatString(item);
  });
  return cloneArray;
}

export function clearFormArray(formArray: FormArray) {
  while (formArray.length !== 0) {
    formArray.removeAt(0);
  }
}

export function arrayToFormArray<T extends any[]>(
  data: T,
  formArray: FormArray = new FormArray<any>([]),
): FormArray {
  data.forEach(item => {
    let control: AbstractControl;
    const itemType = typeof item;
    if (SIMPLE_TYPES.includes(itemType)) {
      control = new FormControl(item);
    } else if (Array.isArray(item)) {
      control = arrayToFormArray(item);
    } else if (ENUMARABLE_TYPES.includes(itemType)) {
      control = objectToFormGroup(item);
    } else {
      return;
    }

    formArray.push(control);
  });
  return formArray;
}

export function shuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}