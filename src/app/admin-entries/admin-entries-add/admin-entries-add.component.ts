import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../services/admin.service";
import {MdDialogRef} from "@angular/material";
import {Entry} from "../../models/entry";

@Component({
  selector: 'app-admin-entries-add',
  templateUrl: './admin-entries-add.component.html',
  styleUrls: ['./admin-entries-add.component.css']
})
export class AdminEntriesAddComponent implements OnInit {

  entryForm: FormGroup;

  constructor(private fb: FormBuilder,
              public dialogRef: MdDialogRef<AdminEntriesAddComponent>,
              private service: AdminService) { }

  ngOnInit() {
    this.entryForm = this.fb.group({
      title: ['', Validators.compose([Validators.maxLength(25), Validators.required])],
      img_src: ['', Validators.required]
    });
  }

  onSubmit() {
    this.service.addEntry(this.entryForm.value as Entry).subscribe();
    this.dialogRef.close();
  }

}
