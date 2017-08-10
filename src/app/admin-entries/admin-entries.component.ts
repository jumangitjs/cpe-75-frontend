import { Component, OnInit } from '@angular/core';
import { MdDialog } from "@angular/material";
import { AdminService } from "../services/admin.service";
import {Entry} from "../models/entry";
import {AdminEntriesAddComponent} from "./admin-entries-add/admin-entries-add.component";
import {AdminEntriesEditComponent} from "./admin-entries-edit/admin-entries-edit.component";

@Component({
  selector: 'app-admin-entries',
  templateUrl: './admin-entries.component.html',
  styleUrls: ['./admin-entries.component.css']
})
export class AdminEntriesComponent implements OnInit {

  selectedEntry: Entry;
  entries: Entry[];

  constructor(private dialog: MdDialog,
              private service: AdminService) { }

  ngOnInit() {
    this.service.getEntries().subscribe(res => this.entries = res);
  }

  onEdit(entry: Entry) {
    this.selectedEntry = entry;

    this.dialog.open(AdminEntriesEditComponent, {
      width: '400px',
      height: '300px',
      position: 'fixed',
      data: this.selectedEntry
    });

    this.dialog.afterAllClosed.subscribe(next =>
      this.service.getEntries().subscribe(res => this.entries = res));
  }

  onDelete(id: number) {
    this.service.deleteEntry(id).subscribe(next =>
      this.service.getEntries().subscribe(res => this.entries = res));
  }

  createEntry() {
    this.dialog.open(AdminEntriesAddComponent, {
      width: '400px',
      height: '300px',
      position: 'fixed',
    });

    this.dialog.afterAllClosed.subscribe(next =>
      this.service.getEntries().subscribe(res => this.entries = res));
  }
}
