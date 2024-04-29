import { ComponentType } from '@angular/cdk/portal';

export interface TableColumn {
    header: string;
    property: string;
    tooltip: string;
}

export interface TableData<T = any> {
    columns: TableColumn[],
    id: TableColumn,
    avatar: TableColumn,
    dialogComponent?: ComponentType<T>
}