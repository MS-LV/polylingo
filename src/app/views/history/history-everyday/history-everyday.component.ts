import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TableComponent } from '@components/table/table.component';
import {evrydayHistories, historyTableData} from './history-everyday.data';

@Component({
  selector: 'app-history-everyday',
  standalone: true,
  templateUrl: './history-everyday.component.html',
  styleUrl: './history-everyday.component.scss',
  imports: [RouterLink, TableComponent],
})
export class HistoryEverydayComponent {
  tableData = signal(historyTableData);
  historyList = signal(evrydayHistories);


  ngAfterViewInit() {
    console.log('data: ', evrydayHistories);
  }

  onUpdateUser(_:any): void {
    
  }
}
