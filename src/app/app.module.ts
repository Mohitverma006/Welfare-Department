import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { JordanComponent } from './jordan/jordan.component';
import { SaudiArabiaComponent } from './saudi-arabia/saudi-arabia.component';
import { KuwaitComponent } from './kuwait/kuwait.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { RaiseConcernComponent } from './raise-concern/raise-concern.component';
import { JordanapplicantListComponent } from './jordanapplicant-list/jordanapplicant-list.component';
import { EmailComponent } from './email/email.component';
import { SmsComponent } from './sms/sms.component';
import { KuwaitapplicantListComponent } from './kuwaitapplicant-list/kuwaitapplicant-list.component';
import { SaudiarabiaapplicantListComponent } from './saudiarabiaapplicant-list/saudiarabiaapplicant-list.component';
import { RaiseconcernMessageComponent } from './raiseconcern-message/raiseconcern-message.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetComponent,
    CreateComponent,
    HomeComponent,
    JordanComponent,
    SaudiArabiaComponent,
    KuwaitComponent,
    ProfileDetailComponent,
    RaiseConcernComponent,
    JordanapplicantListComponent,
    EmailComponent,
    SmsComponent,
    KuwaitapplicantListComponent,
    SaudiarabiaapplicantListComponent,
    RaiseconcernMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
