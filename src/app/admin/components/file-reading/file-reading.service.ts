import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { excelDataPrepare, parseExcel, formatItems } from '@utils/array.utils';
import { formatString } from '@utils/text.utils';
import { FileReading } from '@admin/components/component.interface';
import { ParsedExcel } from './file-reading.interface';

@Injectable()
export class FileReadingService {
  constructor(private fb: FormBuilder) {}

  excelFormGroup(file: File): Observable<ParsedExcel> {
    return parseExcel(file).pipe(
      take(1),
      map(data => {
        const fields = ['description', 'answer'];
        const convertReading: FileReading[] = this.formatReading(
          excelDataPrepare(data, fields) as FileReading[]
        );
        const paragraphs = convertReading
          .map(({ text }) => text)
          .filter(Boolean)
          .map(text => new FormControl(text, [Validators.required]));
        const readTexts = this.fb.array(paragraphs);
        const formGroups: FormGroup[] = [];
        convertReading.forEach(grammar => {
          if (!grammar.neither || !grammar.answer) {
            return;
          }
          formGroups.push(
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
        return { formGroups, readTexts };
      })
    );
  }

  private formatReading(grammars: FileReading[]): FileReading[] {
    for (const grammar of grammars) {
      grammar.answer = formatString(grammar.answer);
      grammar.description = formatString(grammar.description);
      grammar.neither = formatItems(grammar.neither);
    }
    return grammars;
  }
}
