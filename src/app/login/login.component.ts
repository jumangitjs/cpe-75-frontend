import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs/Observable';
import {HomeComponent} from '../home/home.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalid: Observable<boolean>;

  constructor(private fb: FormBuilder,
              private service: AuthService,
              private parent: HomeComponent) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required,
        Validators.minLength(4)])],
      password: ['', Validators.required]
    });

    this.invalid = this.service.isInvalid;
  }

  onSubmit() {
      this.service.login(this.loginForm.value);
      this.parent.loggedIn = true;
  }

}
