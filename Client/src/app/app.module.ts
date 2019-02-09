import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header.component';
import { FooterComponent } from './shared/footer.component';
import { AboutusComponent } from './shared/aboutus.component';
import { LoginComponent } from './shared/login.component';
import { SignupComponent } from './shared/signup.component';
import { GuestAddComponent } from './guest/guest-add.component';
import { GuestEditComponent } from './guest/guest-edit.component';
import { GuestSearchComponent } from './guest/guest-search.component';
import { GuestResultComponent } from './guest/guest-result.component';
import { HostResultComponent } from './host/host-result.component';
import { HostSearchComponent } from './host/host-search.component';
import { HostAddComponent } from './host/host-add.component';
import { HostEditComponent } from './host/host-edit.component';
import { RegisterResultComponent } from './register/register-result.component';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    LoginComponent,
    SignupComponent,
    GuestAddComponent,
    GuestEditComponent,
    GuestSearchComponent,
    GuestResultComponent,
    HostResultComponent,
    HostSearchComponent,
    HostAddComponent,
    HostEditComponent,
    RegisterResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollDispatchModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
