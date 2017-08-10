import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../services/admin.service';
import {Router} from '@angular/router';
import { Account } from '../models/account';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private service: AdminService,
              private router: Router) { }

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
    this.service.register(this.registerForm.value as Account)
      .subscribe(res => this.router.navigate(['home/login']),
        err => err)
  }
}
