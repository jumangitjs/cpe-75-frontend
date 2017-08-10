import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: AuthService) { }

  loggedIn: boolean;

  ngOnInit() {
    this.loggedIn = this.service.isLoggedIn;
  }

  logout() {
    this.service.logout();
    this.ngOnInit();
  }

}
