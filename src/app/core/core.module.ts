import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { EmailSignupComponent } from './footer/email-signup/email-signup.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import { BubblesComponent } from './bubbles/bubbles.component';
import { TagViewerComponent } from './tag-viewer/tag-viewer.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatChipsModule
  ],
  declarations: [NavComponent, EmailSignupComponent, FooterComponent, BubblesComponent, TagViewerComponent],
  exports: [
    NavComponent,
    FooterComponent,
    EmailSignupComponent,
    BubblesComponent,
    TagViewerComponent
  ]
})
export class CoreModule { }
