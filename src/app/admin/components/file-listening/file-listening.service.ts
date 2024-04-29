import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { excelDataPrepare, parseExcel, formatItems } from '@utils/array.utils';
import { formatString } from '@utils/text.utils';
import { FileGrammar } from '@admin/components/component.interface';

@Injectable()
export class FileListeningService {
  constructor(private fb: FormBuilder) {}

  excelFormGroup(file: File): Observable<FormGroup[]> {
    return parseExcel(file).pipe(
      take(1),
      map(data => {
        const fields = ['description', 'answer'];
        const convertGrammar: FileGrammar[] = this.formatGrammar(
          excelDataPrepare(data, fields) as FileGrammar[]
        );
        const questionList: FormGroup[] = [];
        convertGrammar.forEach(grammar => {
          if (!grammar.neither || !grammar.answer) {
            return;
          }
          questionList.push(
            this.fb.group({
              description: [grammar.description, [Validators.required]],
              answer: [grammar.answer, [Validators.required]],
              neither: this.fb.array(
                [grammar.answer, ...grammar.neither],
                [Validators.required]
              ),
            })
          );
        });
        return questionList;
      })
    );
  }

  private formatGrammar(grammars: FileGrammar[]): FileGrammar[] {
    for (const grammar of grammars) {
      grammar.answer = formatString(grammar.answer);
      grammar.description = formatString(grammar.description);
      grammar.neither = formatItems(grammar.neither);
    }
    return grammars;
  }
}
