import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { EmailSignupComponent } from './footer/email-signup/email-signup.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavComponent, EmailSignupComponent, FooterComponent],
  exports: [
    NavComponent,
    FooterComponent,
    EmailSignupComponent
  ]
})
export class CoreModule { }
