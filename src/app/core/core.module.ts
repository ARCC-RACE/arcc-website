import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { EmailSignupComponent } from './email-signup/email-signup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavComponent, EmailSignupComponent]
})
export class CoreModule { }
