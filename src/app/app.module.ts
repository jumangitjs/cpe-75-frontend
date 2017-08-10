import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminEntriesComponent } from './admin-entries/admin-entries.component';
import { EntryListComponent } from './entry-list/entry-list.component';

import { routes } from './app-routing';
import { RouterModule } from '@angular/router';
import { HomeContentComponent } from './home-content/home-content.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import {HttpModule} from '@angular/http';
import {AuthGuard} from "./auth.guard";
import {LoggedInGuard} from "./logged-in.guard";
import {AdminService} from "./services/admin.service";
import { AdminUsersAddComponent } from './admin-users/admin-users-add/admin-users-add.component';
import { AdminUsersEditComponent } from './admin-users/admin-users-edit/admin-users-edit.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "@angular/material";

import 'hammerjs';
import { AdminEntriesEditComponent } from './admin-entries/admin-entries-edit/admin-entries-edit.component';
import { AdminEntriesAddComponent } from './admin-entries/admin-entries-add/admin-entries-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    AdminHomeComponent,
    AdminUsersComponent,
    AdminEntriesComponent,
    EntryListComponent,
    HomeContentComponent,
    LoginComponent,
    AdminUsersAddComponent,
    AdminUsersEditComponent,
    AdminEntriesEditComponent,
    AdminEntriesAddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ AuthService, AdminService, AuthGuard, LoggedInGuard ],

  entryComponents: [
    AdminUsersAddComponent,
    AdminUsersEditComponent,
    AdminEntriesAddComponent,
    AdminEntriesEditComponent
    ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
