import { Injectable } from '@angular/core';

import {Score} from '@views/history/history.interface';
import {DictionaryQuestionDocument} from '@admin/components/component.interface';

@Injectable()
export class HistoryEverydayDetailService {
  constructor() {}

  checkHistory(questionList: DictionaryQuestionDocument[]): Score {
    const result: Score = {
      total: questionList.length,
      answered: 0
    }
    questionList.forEach((question: DictionaryQuestionDocument) => {
      if(question.english !== question.userAnswer) {
        return;
      }
      result.answered += 1;
    });
    return result;
  }
}
