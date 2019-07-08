import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { EmailSignupComponent } from './footer/email-signup/email-signup.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BubblesComponent } from './bubbles/bubbles.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  declarations: [NavComponent, EmailSignupComponent, FooterComponent, BubblesComponent],
  exports: [
    NavComponent,
    FooterComponent,
    EmailSignupComponent,
    BubblesComponent
  ]
})
export class CoreModule { }
