import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  loggedIn: boolean;
  isAdmin: boolean;

  constructor(private service: AuthService) { }

  ngOnInit() {
    this.loggedIn = this.service.isLoggedIn;
    this.isAdmin = this.service.isAdmin;
  }

}
