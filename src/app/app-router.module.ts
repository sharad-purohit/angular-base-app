import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from './security/auth.guard';
import {CommonModule} from '@angular/common';
import {APP_CONSTANTS} from './constants/app.constants';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [AuthGuard],
    data: {
      role: APP_CONSTANTS.USER_ROLES.ADMIN
    }
  },
  {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      role: APP_CONSTANTS.USER_ROLES.USER
    }
  }
];

@NgModule({
  declarations: [LoginComponent, HomeComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule],
  exports: [RouterModule, LoginComponent]
})
export class AppRoutingModule {
}
