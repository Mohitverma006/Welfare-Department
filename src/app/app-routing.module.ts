import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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




const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'forget',
    component:ForgetComponent
  },
  {
    path:'create',
    component:CreateComponent
  },
  {
    path:'home',
    component:HomeComponent,
      children:[
        {
          path:'',
          component:ProfileDetailComponent
        },
        {
          path:'profileDetail',
          component:ProfileDetailComponent
        },
        {
          path:'jordan',
          component:JordanComponent,
            children:[
              {
                path:'',
                component:JordanapplicantListComponent
              },
              {
                path:'email',
                component:EmailComponent
              },
              {
                path:'sms',
                component:SmsComponent
              }
            ]
        },
        {
          path:'kuwait',
          component:KuwaitComponent,
            children:[
              {
                path:'',
                component:KuwaitapplicantListComponent
              },
              {
                path:'email',
                component:EmailComponent
              },
              {
                path:'sms',
                component:SmsComponent
              }
            ]
        },
        {
          path:'saudiArabia',
          component:SaudiArabiaComponent,
          children:[
            {
              path:'',
              component:SaudiarabiaapplicantListComponent
            },
            {
              path:'email',
              component:EmailComponent
            },
            {
              path:'sms',
              component:SmsComponent
            }
          ]
        },
        {
          path:'raiseConcern',
          component:RaiseConcernComponent,
            children:[
              {
                path:'',
                component:RaiseconcernMessageComponent
              }
            ]
        },
      ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
