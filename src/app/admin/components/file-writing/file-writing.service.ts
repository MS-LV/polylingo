import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { excelDataPrepare, parseExcel } from '@utils/array.utils';
import { formatString } from '@utils/text.utils';
import { FileWriting } from '@admin/components/component.interface';

@Injectable()
export class FileWritingService {
  constructor(private fb: FormBuilder) {}

  excelFormGroup(file: File): Observable<FormControl[]> {
    return parseExcel(file).pipe(
      take(1),
      map(data => {
        const fields = ['theme'];
        const convertGrammar: FileWriting[] = this.formatGrammar(
          excelDataPrepare(data, fields) as FileWriting[]
        );
        const questionList: FormControl[] = [];
        convertGrammar.forEach(grammar => {
          if (!grammar.theme) {
            return;
          }
          questionList.push(
            this.fb.control(grammar.theme, [Validators.required])
          );
        });
        return questionList;
      })
    );
  }

  private formatGrammar(grammars: FileWriting[]): FileWriting[] {
    for (const grammar of grammars) {
      grammar.theme = formatString(grammar.theme);
    }
    return grammars;
  }
}
