import {Routes} from '@angular/router';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminUsersComponent} from './admin-users/admin-users.component';
import {AuthGuard} from './auth.guard';
import {AdminEntriesComponent} from './admin-entries/admin-entries.component';
import {HomeComponent} from './home/home.component';
import {EntryListComponent} from './entry-list/entry-list.component';
import {RegisterComponent} from './register/register.component';
import {HomeContentComponent} from './home-content/home-content.component';
import {LoginComponent} from './login/login.component';
import {LoggedInGuard} from "./logged-in.guard";

export const routes:Routes = [
  {
    path: 'admin',
    component: AdminHomeComponent,
    canActivate: [AuthGuard],
    data: {
      toolbarTitle: 'Admin Home'
    },
    children: [
      {
        path: 'users',
        component: AdminUsersComponent,
        data: {
          toolbarTitle: 'Users'
        }
      },
      {
        path: 'entries',
        component: AdminEntriesComponent,
        data: {
          toolbarTitle: 'Entries'
        }
      }
    ],
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      toolbarTitle: 'Journey with Jur'
    },
    children:[
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoggedInGuard]
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'entries',
        component: EntryListComponent,
        data: {
          toolbarTitle: 'Journey with Jur'
        }
      },
      {
        path: '',
        component: HomeContentComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];
