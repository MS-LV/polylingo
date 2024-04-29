import { FormGroup } from '@angular/forms';

import { Activities } from '@constants/enum.constants';
import { TestingStep } from '@student_views/testing/testing.interface';

import {testingDocumentData} from '@admin/views/folder/views/testing/testing.data';
import { GrammarComponent } from '@student/views/testing/components/grammar/grammar.component';
import { ReadingComponent } from '@student/views/testing/components/reading/reading.component';
import { ListeningComponent } from '@student/views/testing/components/listening/listening.component';
import { DictionaryComponent } from '@student/views/testing/components/dictionary/dictionary.component';
import { WritingComponent } from '@student/views/testing/components/writing/writing.component';

const testingDocument = testingDocumentData[0];

export function activitiesStep(formGroup: FormGroup): TestingStep[] {
  const result: TestingStep[] = [
    {
      _id: 1,
      label: Activities.GRAMMAR,
      component: GrammarComponent,
      inputs: {
        formGroup: <FormGroup>formGroup.get([Activities.GRAMMAR]),
        document: testingDocument[Activities.GRAMMAR]
      },
    },
    {
      _id: 2,
      label: Activities.READING,
      component: ReadingComponent,
      inputs: {
        formGroup: <FormGroup>formGroup.get([Activities.READING]),
        document: testingDocument[Activities.READING]
      },
    },
    {
      _id: 3,
      label: Activities.LISTENING,
      component: ListeningComponent,
      inputs: {
        formGroup: <FormGroup>formGroup.get([Activities.LISTENING]),
        document: testingDocument[Activities.LISTENING]
      },
    },
    {
      _id: 4,
      label: Activities.DICTIONARY,
      component: DictionaryComponent,
      inputs: {
        formGroup: <FormGroup>formGroup.get([Activities.DICTIONARY]),
        document: testingDocument[Activities.DICTIONARY]
      },
    },
    {
      _id: 5,
      label: Activities.WRITING,
      component: WritingComponent,
      inputs: {
        formGroup: <FormGroup>formGroup.get([Activities.WRITING]),
        document: testingDocument[Activities.WRITING]
      },
    },
    
  ];
  return result;
}
