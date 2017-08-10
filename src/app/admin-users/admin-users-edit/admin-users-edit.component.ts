import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {Account} from "../../models/account";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-admin-users-edit',
  templateUrl: './admin-users-edit.component.html',
  styleUrls: ['./admin-users-edit.component.css']
})
export class AdminUsersEditComponent implements OnInit {

  editForm: FormGroup;
  account: Account;

  constructor(private fb: FormBuilder,
              public dialogRef: MdDialogRef<AdminUsersEditComponent>,
              @Inject(MD_DIALOG_DATA) private data: Account,
              private service: AdminService) { }

  ngOnInit() {

    this.account = this.data;

    this.editForm = this.fb.group({
      first_name: ['', Validators.maxLength(25)],
      last_name: ['', ],
      email: ['', Validators.email],
      username: ['', Validators.maxLength(15)]
    });
  }

  onSubmit() {
    this.service.putUser(this.editForm.value as Account, this.account.id).subscribe();
    this.dialogRef.close();
  }

}
