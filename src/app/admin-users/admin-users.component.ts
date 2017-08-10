import { Component, OnInit } from '@angular/core';
import {AdminService} from "../services/admin.service";
import { Account } from '../models/account';
import {MdDialog} from "@angular/material";
import {AdminUsersEditComponent} from "./admin-users-edit/admin-users-edit.component";
import {AdminUsersAddComponent} from "./admin-users-add/admin-users-add.component";

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  selectedAccount: Account;
  accounts: Account[];

  constructor(private service: AdminService,
              private dialog: MdDialog) { }

  ngOnInit() {
    this.service.getUsers().subscribe(res => this.accounts = res as Account[]);
  }

  onEdit(account: Account) {
    this.selectedAccount = account;

    this.dialog.open(AdminUsersEditComponent, {
      width: '400px',
      height: '300px',
      position: 'fixed',
      data: this.selectedAccount
    });

    this.dialog.afterAllClosed.subscribe(next => this.service.getUsers()
      .subscribe(res => this.accounts = res as Account[]));
  }

  onDelete(id: number) {
    this.service.deleteUser(id).subscribe(next => this.service.getUsers()
      .subscribe(res => this.accounts = res as Account[]));
  }

  createAccount() {
    this.dialog.open(AdminUsersAddComponent, {
      width: '400px',
      height: '400px',
      position: 'fixed'
    });

    this.dialog.afterAllClosed.subscribe(next => this.service.getUsers()
      .subscribe(res => this.accounts = res as Account[]));
  }

}
