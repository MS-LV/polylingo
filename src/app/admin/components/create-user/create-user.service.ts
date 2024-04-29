import { excelDataPrepare, parseExcel } from '@utils/array.utils';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { DictionaryList } from '@student_views/dictionary/dictionary.interface';

@Injectable()
export class CreateDictionaryService {
  constructor(private fb: FormBuilder) {}

  excelFormGroup(file: File): Observable<FormGroup[]> {
    return new Observable((subs: Subscriber<FormGroup[]>) => {
      subs.next([]);
    }).pipe(
      mergeMap(() => parseExcel(file)),
      map(data => {
        const fields = ['tajik', 'english', 'russian'];
        const convertedData: DictionaryList[] = excelDataPrepare(
          data,
          fields
        ) as DictionaryList[];
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
