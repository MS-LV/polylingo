import { Injectable } from '@angular/core';

import {Activities} from '@constants/enum.constants';
import {answerCompare} from '@utils/text.utils';
import {TestingHistory} from '@admin/admin.interface';
import {GrammarDocument, GrammarQuestionDocument, DictionaryQuestionDocument} from '@admin/components/component.interface';
import {Score} from '@views/history/history.interface';

// const example: DictionaryQuestionDocument[] = [];

@Injectable()
export class HistoryTestingDetailService {
  constructor() {}


  checkHistory(historyData: TestingHistory): Score {
    const score: Score = {total: 0, answered: 0};
    const activities = <string[]>Object.values(Activities);
    const variantActivities: string[] = [Activities.GRAMMAR, Activities.READING, Activities.LISTENING];
    const textActivities: string[] = [Activities.DICTIONARY];
    for(const key in historyData) {
      if(activities.indexOf(key) === -1) {
        continue;
      }
      const value = <GrammarDocument>(<any>historyData)[key];
      if(!value?.questionList) {
        continue;
      }
      const questionList = <(GrammarQuestionDocument | DictionaryQuestionDocument)[]>value.questionList;
      score.total += questionList.length;
      if(variantActivities.indexOf(key) !== -1) {
        this.checkGrammar(<GrammarQuestionDocument[]>questionList, score);
      }
      if(textActivities.indexOf(key) !== -1) {
        const questionList = <DictionaryQuestionDocument[]>value.questionList;
        this.checkDictionary(questionList, score);
      }
    }
    return score;
  }

  private checkGrammar(questionList: GrammarQuestionDocument[], score: Score): Score {
    questionList.forEach((question: GrammarQuestionDocument) => {
      if(answerCompare(question.answer, question.userAnswer)) {
        score.answered += 1;
      }
    });
    return score;
  }

  private checkDictionary(questionList: DictionaryQuestionDocument[], score: Score): Score {
    questionList.forEach((question: DictionaryQuestionDocument) => {
      if(answerCompare(question.userAnswer, question.english)) {
        score.answered += 1;
      }
    })
    return score;
  }
}
