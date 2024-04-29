import { Component, signal, inject, AfterViewInit } from '@angular/core';
import {PercentPipe} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {FormGroup} from '@angular/forms';
import { RouterLink } from '@angular/router';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {objectToFormGroup} from '@utils/object.utils';
import {EverydayHistory} from '@admin/admin.interface';
import {Score} from '@views/history/history.interface';
import {DictionaryQuestionDocument} from '@admin/components/component.interface';
import {evrydayHistories} from '@views/history/history-everyday/history-everyday.data';
import {DictionaryResultComponent} from '@components/dictionary-result/dictionary-result.component';
import {HistoryEverydayDetailService} from './history-everyday-detail.service';

@Component({
  selector: 'app-history-everyday-detail',
  standalone: true,
  imports: [ 
    PercentPipe,
    RouterLink, 
    MatProgressSpinnerModule,
    DictionaryResultComponent,
  ],
  providers: [HistoryEverydayDetailService],
  templateUrl: './history-everyday-detail.component.html',
  styleUrl: './history-everyday-detail.component.scss',
})
export class HistoryEverydayDetailComponent implements AfterViewInit {
  formGroup = signal<FormGroup | null>(null);
  score = signal<Score | null>(null);

  private route = inject(ActivatedRoute);
  private service = inject(HistoryEverydayDetailService);

  ngAfterViewInit(): void {
    this.loadHistory();
    this.calcScore();
  }


  private getHistory(id: string): EverydayHistory{
    return evrydayHistories.find((history) => history._id == id)!;
  }

  private loadHistory() {
    const historyID = <string>this.route.snapshot.paramMap.get('id');
    const currentHistory = this.getHistory(historyID);
    this.formGroup.set(objectToFormGroup(currentHistory));
  }

  private calcScore(): void {
    if(!this.formGroup()) {
      return;
    }
    const questionList = <DictionaryQuestionDocument[]>this.formGroup()!.get('questionList')!.value;
    this.score.set(this.service.checkHistory(questionList));
    console.log(this.score());
  }
}
