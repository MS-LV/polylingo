import {
  Component,
  signal,
  Inject,
  viewChild,
  AfterViewInit,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { fromEvent, Observable, Subject } from 'rxjs';
import { debounceTime, tap, takeUntil, take } from 'rxjs/operators';

import { textInclude } from '@utils/text.utils';
import {EVERYDAY_FORM_GROUP} from '@constants/form.constants';
import { DialogData } from '@admin/components/component.interface';
import { CleanSubscriptionsAndMemoryLeaks } from '@utils/decorator.utils';
import { CreateEverydayComponent } from '@admin/components/create-everyday/create-everyday.component';
import { EverydayFormGroup, EverydayDocument } from '@admin/admin.interface';
import { MATERIAL_CONFIG_TOKEN, MaterialConfig } from '@/material.config';
import { everydayDocumentsData, everydayTableData } from './everyday.data';
import { TableComponent } from '@components/table/table.component';

@CleanSubscriptionsAndMemoryLeaks()
@Component({
  selector: 'app-everyday',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    TableComponent,
  ],
  templateUrl: './everyday.component.html',
  styleUrl: './everyday.component.scss',
})
export class EverydayComponent implements AfterViewInit, OnDestroy {
  searchInput = viewChild.required<ElementRef>('searchInput');
  everydayList = signal<EverydayDocument[]>(everydayDocumentsData);
  searchControl = signal(new FormControl('', [Validators.required]));
  tableData = signal(everydayTableData);
  formGroup = signal<FormGroup<EverydayFormGroup>>(EVERYDAY_FORM_GROUP);
  destroy$ = signal(new Subject<boolean>());

  constructor(
    @Inject(MATERIAL_CONFIG_TOKEN) public materialConfig: MaterialConfig,
    private dialog: MatDialog
  ) { }

  ngAfterViewInit() {
    this.onInputHandler();
  }
  onAddEveryday() {
    this.openDialog()
      .pipe(
        take(1)
      )
      .subscribe((everyday: EverydayDocument) => {
        this.everydayList.update((list) => {
          list.unshift(everyday);
          return list;
        })
      })
  }

  onUpdateEveryday(everyday: EverydayDocument): void {
    if (!everyday._id) {
      return;
    }
    const id = everyday._id;
    const index = this.everydayList().findIndex((everyday) => everyday._id === id);
    this.everydayList.update((list) => {
      list.splice(index, 1, everyday);
      return list;
    })
  }

  private openDialog(): Observable<EverydayDocument> {
    const data: DialogData = {
      formGroup: this.formGroup(),
    };
    const dialogRef = this.dialog.open(CreateEverydayComponent, { data });
    return <Observable<EverydayDocument>>dialogRef.afterClosed();
  }

  private onInputHandler() {
    const input = this.searchInput().nativeElement;
    fromEvent<KeyboardEvent>(input, 'input')
      .pipe(
        debounceTime(1000),
        takeUntil(this.destroy$()),
        tap((inputEvent: KeyboardEvent) => {
          const input = <HTMLInputElement>inputEvent.target;
          this.searchDocument(input.value);
        })
      )
      .subscribe();
  }

  private searchDocument(query: string) {
    const data = this.everydayList().filter(document =>
      textInclude(document.label, query)
    );
    this.everydayList.set(data);
  }

  ngOnDestroy(): void {
    this.destroy$().next(true);
  }
}
