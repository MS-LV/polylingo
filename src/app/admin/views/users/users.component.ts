import {
  Component,
  signal,
  Inject,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Observable, Subscription } from 'rxjs';

// import {Controls} from '@admin/components/component.interface';
import { MATERIAL_CONFIG_TOKEN, MaterialConfig } from '@/material.config';
import {PROFILE_FORM_GROUP} from '@constants/form.constants';
import { TableComponent } from '@/components/table/table.component';
import { DialogData } from '@admin/components/component.interface';
import { CreateUserComponent } from '@admin/components/create-user/create-user.component';
import { UsersDocument } from '@admin/admin.interface';
import { UsersDocumentsData, usersTableData } from '@admin/views/users/users.data';
import { USERS_FORM_CONFIG_TOKEN, UsersFormConfig } from '@configs/users.configs';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    TableComponent,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  usersList = signal<UsersDocument[]>(UsersDocumentsData);
  tableData = signal(usersTableData)
  searchField = signal(new FormControl('', Validators.required));
  dialogRef!: Subscription;

  formGroup = signal(PROFILE_FORM_GROUP);

  constructor(
    @Inject(MATERIAL_CONFIG_TOKEN) public materialConfig: MaterialConfig,
    @Inject(USERS_FORM_CONFIG_TOKEN) public usersFormConfig: UsersFormConfig,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  onAddUser() {
    this.dialogRef = this.openDialog()
      .subscribe((user: UsersDocument) => {
        if (!user) {
          return
        }
        this.usersList.update((users) => {
          users.unshift(user);
          return users;
        })
      });
  }


  onUpdateUser(user: UsersDocument): void {
    if (!user ?._id) {
      return;
    }
    const id = user._id;
    const index = this.usersList().findIndex((user) => user._id === id);
    this.usersList.update((list) => {
      list.splice(index, 1, user);
      return list;
    });
  }

  private openDialog(): Observable<UsersDocument> {
    const data: DialogData = {
      formGroup: this.formGroup(),
    };
    const dialogRef = this.dialog.open(CreateUserComponent, { data });
    return <Observable<UsersDocument>>dialogRef.afterClosed();
  }
}
