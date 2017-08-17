import {Injectable} from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Credentials } from 'app/models/credentials';

import 'rxjs/add/operator/map';

import { Subject } from 'rxjs/Subject';
import { Account } from '../models/account';
import { Router } from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {

  storage = localStorage;
  account: Account;

  logger: Subject<boolean> = BehaviorSubject.create();
  invalid: Subject<boolean> = BehaviorSubject.create();
  admin: Subject<boolean> = BehaviorSubject.create();

  headers = new Headers({
    'Content-type': 'applcation/json'
  });

  options = new RequestOptions({
    headers: this.headers
  });

  constructor(private http: Http,
              private router: Router) { }

  login(credentials: Credentials) {
    return this.http.post(environment.apiServer + 'user/login', credentials, this.options)
      .map(res => res.json())
      .subscribe(observer => {

        this.storage.setItem('id', observer.user.id);
        this.storage.setItem('token', observer.token);
        this.storage.setItem('name', observer.user.first_name);
        this.storage.setItem('email', observer.user.email);
        this.storage.setItem('loggedIn', 'true');
        this.storage.setItem('isAdmin', observer.user.role);

        this.router.navigateByUrl('localhost:4200/home');

        return true;
      },
      error => {
        return false;
      });
  }

  logout() {
    const logoutHeaders = new Headers({
      'Authorization': this.authorizationHeader
    });

    const logoutOptions = new RequestOptions({
      headers: logoutHeaders
    });

    return this.http.post(environment.apiServer + 'user/logout', {} , logoutOptions)
      .map(res => res.text())
      .subscribe(observer => {

        this.storage.removeItem('id');
        this.storage.removeItem('token');
        this.storage.removeItem('name');
        this.storage.removeItem('email');
        this.storage.removeItem('loggedIn');
        this.storage.removeItem('isAdmin');

        this.router.navigateByUrl('localhost:4200/home');

        return true;
      },
      error => error
      );
  }

  public get authorizationHeader() {
    return 'Bearer ' + this.accessToken;
  }

  private get accessToken() {
    return this.storage.getItem('token');
  }

  public get isAdmin(): boolean {
    return this.storage.getItem('isAdmin') == 'true';
  }

  public get isLoggedIn(){
    return this.storage.getItem('loggedIn') == 'true';
  }

  public get isInvalid(): Observable<boolean> {
    return this.invalid.asObservable();
  }

  public get adminCredentials() {
    this.account.email = this.storage.getItem('email');
    this.account.first_name = this.storage.getItem('name');

    return this.account;
  }

}
