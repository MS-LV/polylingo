import {
  AfterViewInit,
  Component,
  computed,
  input,
  inject,
  Inject,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { FormGroup } from '@angular/forms';
import {Router, RouterLink, ActivatedRoute} from '@angular/router';

import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';

import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { MaterialConfig, MATERIAL_CONFIG_TOKEN } from '@/material.config';
import { CleanSubscriptionsAndMemoryLeaks } from '@utils/decorator.utils';
import { clearFormGroup, objectToFormGroup } from '@utils/object.utils';
import { TableColumn } from '@components/table/table.interface';
import { DialogData } from '@admin/components/component.interface';
import { TableDataSource, HistoryTableItem } from './table-datasource';
import { MatTooltipModule } from '@angular/material/tooltip';
import { toObservable } from '@angular/core/rxjs-interop';

@CleanSubscriptionsAndMemoryLeaks()
@Component({
  selector: 'comp-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  imports: [
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule, 
    MatIconModule, 
    MatTooltipModule, 
    MatButtonModule, 
    TitleCasePipe,
    RouterLink
  ],
})
export class TableComponent implements AfterViewInit {
  router = inject(Router);
  route = inject(ActivatedRoute)
  paginator = viewChild.required(MatPaginator);
  sort = viewChild.required(MatSort);
  table = viewChild.required<MatTable<HistoryTableItem>>(MatTable)

  list = input.required<any[]>();
  columns = input.required<TableColumn[]>();
  identify = input.required<TableColumn>();
  avatar = input<TableColumn>();
  dialogComponent = input<ComponentType<any>>();
  formGroup = input<FormGroup>(new FormGroup({}));

  listChange$ = toObservable(this.list);
  listChange!: Subscription;

  valueChange = output<any>();

  tableColumns = computed<string[]>(
    () => [this.avatar(), ...this.columns(), this.identify(),].map((item) => item!.property)
  );

  dataSource = signal(new TableDataSource());
  pageSizeOptions = signal<number[]>([5, 10, 20, 50]);

  constructor(
    @Inject(MATERIAL_CONFIG_TOKEN) public materialConfig: MaterialConfig,
    private dialog: MatDialog
  ) { }

  ngAfterViewInit(): void {
    this.tableInit();
    this.onListChange();
  }

  action(id: string | number) {
    const currentIndex = this.list().findIndex(item => item._id === id);
    if (currentIndex === -1 || !this.dialogComponent()) {
      this.router.navigate([id], {relativeTo:this.route});
      return;
    }
    clearFormGroup(this.formGroup());
    this.openDialog(this.list()[currentIndex])
      .pipe(
        take(1)
      )
      .subscribe(
        (user: any) => {
          if (!user) {
            return;
          }
          this.valueChange.emit(user);
          this.tableInit();
        }
      );
  }

  private openDialog(userData: any): Observable<any> {
    const formGroup = objectToFormGroup<any>(
      userData,
      this.formGroup()
    );
    const data: DialogData = {
      formGroup,
    };
    const dialogRef = this.dialog.open(this.dialogComponent()!, { data });

    return <Observable<any>>dialogRef.afterClosed();
  }

  private tableInit() {
    this.dataSource.set(new TableDataSource());
    this.dataSource().data = this.list();
    this.dataSource().sort = this.sort();
    this.dataSource().paginator = this.paginator();
    this.table().dataSource = this.dataSource();
  }

  private onListChange() {
    this.listChange = this.listChange$.subscribe(() => {
      this.tableInit();
    });
  }
}
