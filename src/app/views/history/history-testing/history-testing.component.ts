import { Component, signal, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TableComponent } from '@components/table/table.component';
import {testingHistories, historyTableData} from './history-testing.data';

@Component({
  selector: 'app-history-testing',
  templateUrl: './history-testing.component.html',
  styleUrl: './history-testing.component.scss',
  standalone: true,
  imports: [RouterLink, TableComponent],
})
export class HistoryTestingComponent implements AfterViewInit{
  tableData = signal(historyTableData);
  historyList = signal(testingHistories);



  ngAfterViewInit(): void {
  }

  onUpdateUser(_: any) {}
}
