import { Component, AfterViewInit, inject, signal } from '@angular/core';
import {PercentPipe} from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { NgComponentOutlet } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {TestingHistory} from '@admin/admin.interface';
import {Score} from '@views/history/history.interface';
import {resultActivities} from './history-testing-detail.data';
import {ResultActivity} from './history-testing-detail.interface';
import { testingHistories } from '@views/history/history-testing/history-testing.data';
import {HistoryTestingDetailService} from './history-testing-detail.service';

@Component({
  selector: 'app-history-testing-detail',
  standalone: true,
  imports: [
    RouterLink, 
    PercentPipe,
    MatProgressSpinnerModule,
    MatExpansionModule, 
    NgComponentOutlet
  ],
  providers: [HistoryTestingDetailService],
  templateUrl: './history-testing-detail.component.html',
  styleUrl: './history-testing-detail.component.scss',
})
export class HistoryTestingDetailComponent implements AfterViewInit {
  historyData = signal<TestingHistory | null>(null);
  resultActivities = signal<ResultActivity[]>([]);
  score = signal<Score | null>(null);
  
  private route = inject(ActivatedRoute);
  private service = inject(HistoryTestingDetailService);

  ngAfterViewInit(): void {
    this.loadHistory();
    this.calcScore();
  }


  private getHistory(id: string): TestingHistory{
    return testingHistories.find((history) => history._id == id)!;
  }

  private loadHistory() {
    const historyID = <string>this.route.snapshot.paramMap.get('id');
    this.historyData.set(this.getHistory(historyID));
    if(!this.historyData()) {
      return;
    }
    this.resultActivities.set(resultActivities(this.historyData()!));
  }

  private calcScore() {
    if(!this.historyData()) {
      return;
    }
    const score = this.service.checkHistory(this.historyData()!);
    this.score.set(score);
  }
}

