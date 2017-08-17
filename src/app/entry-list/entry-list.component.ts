import { Component, OnInit } from '@angular/core';
import {AdminService} from '../services/admin.service';
import {Entry} from '../models/entry';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: Entry[];
  loggedIn: boolean;

  constructor(private service: AdminService) { }

  ngOnInit() {
    this.loggedIn = localStorage.getItem('isLoggedIn') === 'true';

    this.service.getEntries().subscribe(res => this.entries = res);
  }

  triggerLike(id: number) {
    this.service.triggerLike(id).subscribe(next => {
      this.service.getEntries().subscribe(res => this.entries = res);
      // alert('halo!');
    });
  }

}
