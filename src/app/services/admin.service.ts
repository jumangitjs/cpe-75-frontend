import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import {environment} from "../../environments/environment";
import {AuthService} from "./auth.service";
import {Account} from "../models/account";
import {Entry} from "../models/entry";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AdminService {

  headers = new Headers({
    'Content-type': 'Application/json',
    'Authorization': this.auth.authorizationHeader
  });

  options = new RequestOptions({
    headers: this.headers
  });

  constructor(private http: Http,
              private auth: AuthService) { }

  register(account: Account) {
    return this.http.post(environment.apiServer + 'user', account, this.auth.options)
      .map(res => res.json());
  }

  getUsers(): Observable<Account[]> {
    return this.http.get(environment.apiServer + 'users', this.options)
      .map(res => res.json());
  }

  putUser(account: Account, id: number) {
    return this.http.put(environment.apiServer + `user/${id}`, account, this.options)
      .map(res => res.json());
  }

  deleteUser(id: number) {
    return this.http.delete(environment.apiServer + `user/${id}`, this.options)
      .map(res => res ? res.json() : res.text());
  }

  getEntries() {
    return this.http.get(environment.apiServer + 'entries', this.auth.options)
      .map(res => res ? res.json() : res.text());
  }

  addEntry(entry: Entry) {
    return this.http.post(environment.apiServer + 'entry', entry,this.options)
      .map(res => res ? res.json() : res.text());
  }

  putEntry(entry: Entry, id: number) {
    return this.http.put(environment.apiServer + `entry/${id}`, entry, this.options)
      .map(res => res ? res.json() : res.text());
  }

  deleteEntry(id: number) {
    return this.http.delete(environment.apiServer + `entry/${id}`, this.options)
      .map(res => res ? res.json() : res.text());
  }
}
