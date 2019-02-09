import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/login.component';
import { AboutusComponent } from './shared/aboutus.component';
import { SignupComponent } from './shared/signup.component';
import { HostAddComponent } from './host/host-add.component';
import { HostEditComponent } from './host/host-edit.component';
import { HostSearchComponent } from './host/host-search.component';
import { HostResultComponent } from './host/host-result.component';
import { GuestAddComponent } from './guest/guest-add.component';
import { GuestEditComponent } from './guest/guest-edit.component';
import { GuestSearchComponent } from './guest/guest-search.component';
import { GuestResultComponent } from './guest/guest-result.component';
import { RegisterResultComponent } from './register/register-result.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [{ path: '', redirectTo: '/aboutus', pathMatch: 'full' },
{ path: 'aboutus', component: AboutusComponent },
{ path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'host-add', component: HostAddComponent, canActivate: [AuthGuardService] },
{ path: 'host-edit/:id', component: HostEditComponent, canActivate: [AuthGuardService] },
{ path: 'host-search', component: HostSearchComponent, canActivate: [AuthGuardService] },
{ path: 'host-result', component: HostResultComponent, canActivate: [AuthGuardService] },
{ path: 'host-result/:inputName:inputAddress:inputEmail:inputPhone', component: HostResultComponent, canActivate: [AuthGuardService] },
{ path: 'guest-add', component: GuestAddComponent, canActivate: [AuthGuardService] },
{ path: 'guest-edit/:id', component: GuestEditComponent, canActivate: [AuthGuardService] },
{ path: 'guest-search', component: GuestSearchComponent, canActivate: [AuthGuardService] },
{ path: 'guest-result', component: GuestResultComponent, canActivate: [AuthGuardService] },
{ path: 'guest-result/:inputName:inputAddress:inputEmail:inputPhone', component: GuestResultComponent, canActivate: [AuthGuardService] },
{ path: 'register-result', component: RegisterResultComponent, canActivate: [AuthGuardService] },
{ path: '**', redirectTo: '/aboutus', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
