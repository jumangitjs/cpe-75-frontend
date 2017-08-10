import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  email: string;
  loaded: boolean;

  constructor() { }

  ngOnInit() {
    this.loaded = true;
    this.email = localStorage.getItem('email');
  }

  onChange() {
    this.loaded = false;
  }

}
