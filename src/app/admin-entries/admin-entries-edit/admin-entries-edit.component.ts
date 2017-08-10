import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../services/admin.service";
import {Entry} from "../../models/entry";

@Component({
  selector: 'app-admin-entries-edit',
  templateUrl: './admin-entries-edit.component.html',
  styleUrls: ['./admin-entries-edit.component.css']
})
export class AdminEntriesEditComponent implements OnInit {

  editForm: FormGroup;
  entry: Entry;

  constructor(private fb: FormBuilder,
              public dialogRef: MdDialogRef<AdminEntriesEditComponent>,
              @Inject(MD_DIALOG_DATA) private data: Entry,
              private service: AdminService) { }

  ngOnInit() {
    this.entry = this.data;

    this.editForm = this.fb.group({
      title: ['', Validators.maxLength(25)],
      img_src: ['', ]
    });
  }

  onSubmit() {
    this.service.putEntry(this.editForm.value as Entry, this.entry.id).subscribe();
    this.dialogRef.close();
  }
}
