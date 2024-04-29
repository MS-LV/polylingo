import { FormGroup } from '@angular/forms';

import { Activities } from '@constants/enum.constants';
import { FileGrammarComponent } from '@admin/components/file-grammar/file-grammar.component';
import { FileDictionaryComponent } from '@admin/components/file-dictionary/file-dictionary.component';
import { FileReadingComponent } from '@admin/components/file-reading/file-reading.component';
import { FileListeningComponent } from '@admin/components/file-listening/file-listening.component';
import { FileWritingComponent } from '@admin/components/file-writing/file-writing.component';
import { CreateTestingExpansion } from './create-testing.interface';


export function activitiesExpansion(formGroup: FormGroup): CreateTestingExpansion[] {
  const result: CreateTestingExpansion[]  = [
    {
      id: 1,
      title: 'Grammar',
      description: 'Add grammar questions',
      component: FileGrammarComponent,
      inputs: {
        formGroup: <FormGroup>formGroup.get(Activities.GRAMMAR),
      },
    },
    {
      id: 2,
      title: 'Reading',
      description: 'Add reading questions',
      component: FileReadingComponent,
      inputs: {
        formGroup: <FormGroup>formGroup.get(Activities.READING),
      },
    },
    {
      id: 3,
      title: 'Listening',
      description: 'Add listening questions',
      component: FileListeningComponent,
      inputs: {
        formGroup: <FormGroup>formGroup.get(Activities.LISTENING),
      },
    },
    {
      id: 4,
      title: 'Dictionary',
      description: 'Add dictionary questions',
      component: FileDictionaryComponent,
      inputs: {
        formGroup: <FormGroup>formGroup.get(Activities.DICTIONARY),
      },
    },
    {
      id: 5,
      title: 'Writing',
      description: 'Add writing questions',
      component: FileWritingComponent,
      inputs: {
        formGroup: <FormGroup>formGroup.get(Activities.WRITING),
      },
    },
  ];

  return result;
}

