import { Component, signal, Inject, AfterViewInit, OnDestroy, viewChild, ElementRef } from '@angular/core';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';

import { Observable, fromEvent, Subject } from 'rxjs';
import { take, debounceTime, takeUntil } from 'rxjs/operators';

import { MATERIAL_CONFIG_TOKEN, MaterialConfig } from '@/material.config';
import {DialogData} from '@admin/components/component.interface';
import {TESTING_FORM_GROUP} from '@constants/form.constants';
import { textInclude } from '@utils/text.utils';
import { cloneForm } from '@utils/object.utils';
import { TestingDocument, TestingFormGroup } from '@admin/admin.interface';
import { Activities } from '@constants/enum.constants';
import { CreateTestingComponent } from '@admin/components/create-testing/create-testing.component';
import { testingDocumentData, testingTableData } from './testing.data';
import { TableComponent } from '@components/table/table.component';

@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    TableComponent
  ],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss',
})
export class TestingComponent implements AfterViewInit, OnDestroy {
  searchInput = viewChild.required<ElementRef>('searchInput')
  testingList = signal<TestingDocument[]>(testingDocumentData);
  searchField = signal(new FormControl('', [Validators.required]));
  tableData = signal(testingTableData);
  Activities = signal(Activities);
  formGroup = signal<FormGroup<TestingFormGroup>>(cloneForm(TESTING_FORM_GROUP));
  destroy$ = signal(new Subject<boolean>());

  constructor(
    @Inject(MATERIAL_CONFIG_TOKEN) public materialConfig: MaterialConfig,
    private dialog: MatDialog
  ) { }
  ngAfterViewInit() {
    this.onInputHandler();
  }

  onAddTesting(): void {
    this.openDialog()
      .pipe(
        take(1)
      )
      .subscribe((testing: TestingDocument) => {
        this.testingList.update((list) => {
          list.unshift(testing);
          return list;
        })
      })
  }

  onUpdateTesting(everyday: TestingDocument): void {
    if (!everyday._id) {
      return;
    }
    const id = everyday._id;
    const index = this.testingList().findIndex((testing) => testing._id === id);
    this.testingList.update((list) => {
      list.splice(index, 1, everyday);
      return list;
    })
  }

  private openDialog(): Observable<TestingDocument> {
    const data: DialogData = {
      formGroup: this.formGroup(),
    };
    const dialogRef = this.dialog.open(CreateTestingComponent, { data });
    return <Observable<TestingDocument>>dialogRef.afterClosed();
  }

  private onInputHandler() {
    const input = this.searchInput().nativeElement;
    fromEvent<KeyboardEvent>(input, 'input')
      .pipe(
        debounceTime(1000),
        takeUntil(this.destroy$()),
    )
      .subscribe((inputEvent: KeyboardEvent) => {
        const input = <HTMLInputElement>inputEvent.target;
        this.searchDocument(input.value);
      });
  }

  private searchDocument(query: string) {
    const data = this.testingList().filter((test: TestingDocument) =>
      textInclude(test.label, query)
    );
    this.testingList.set(data);
  }

  ngOnDestroy(): void {
    this.destroy$().next(true);
  }
}
