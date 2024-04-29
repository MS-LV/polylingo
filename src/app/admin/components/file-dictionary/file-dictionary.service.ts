import { excelDataPrepare, parseExcel } from '@utils/array.utils';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FileDictionary } from '@admin/components/component.interface';

@Injectable()
export class FileDictionaryService {
  constructor(private fb: FormBuilder) {}

  excelFormGroup(file: File): Observable<FormGroup[]> {
    return parseExcel(file).pipe(
      map(data => {
        const fields = ['tajik', 'english', 'russian'];
        const convertedData: FileDictionary[] = excelDataPrepare(
          data,
          fields
        ) as FileDictionary[];
        const questionList: FormGroup[] = [];
        convertedData.forEach(dictionary => {
          questionList.push(
            this.fb.group({
              tajik: [dictionary.tajik, [Validators.required]],
              english: [dictionary.english, [Validators.required]],
              russian: [dictionary.russian, [Validators.required]],
            })
          );
        });
        return questionList;
      })
    );
  }
}
