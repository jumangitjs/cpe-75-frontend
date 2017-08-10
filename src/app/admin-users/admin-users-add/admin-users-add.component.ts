import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {AdminService} from "../../services/admin.service";
import {Account} from "../../models/account";
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-admin-users-add',
  templateUrl: './admin-users-add.component.html',
  styleUrls: ['./admin-users-add.component.css']
})
export class AdminUsersAddComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
              public dialogRef: MdDialogRef<AdminUsersAddComponent>,
              private service: AdminService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      first_name: ['', Validators.compose(
        [Validators.required, Validators.maxLength(25)])],
      last_name: ['', Validators.required],
      password: ['', Validators.compose(
        [Validators.required, Validators.min(5)])],
      email: ['', Validators.compose(
        [Validators.required, Validators.email])],
      username: ['', Validators.compose(
        [Validators.required, Validators.maxLength(15)])]
    });
  }

  onSubmit() {
    if(this.registerForm.valid) {
      this.service.register(this.registerForm.value as Account)
        .subscribe();
      this.dialogRef.close();
    }
  }

}
