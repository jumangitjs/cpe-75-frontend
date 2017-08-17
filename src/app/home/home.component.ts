import {Component, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public loggedIn: boolean;
  public isAdmin: boolean;

  constructor(private service: AuthService) { }

  ngOnInit() {
    this.loggedIn = this.service.isLoggedIn;
    this.isAdmin = this.service.isAdmin;
  }

  logout() {
    this.service.logout();
    this.loggedIn = false;
  }

  twitter() {
    window.open('www.twitter.com/jurielthehuman');
  }

  facebook() {
    window.location.href = 'www.facebook.com/leirujisme';
  }

}
