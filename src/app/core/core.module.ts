import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { EmailSignupComponent } from './footer/email-signup/email-signup.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import { BubblesComponent } from './bubbles/bubbles.component';
import { TagViewerComponent } from './tag-viewer/tag-viewer.component';
import { MatChipsModule } from '@angular/material/chips';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { DropZoneDirective } from './file-upload/drop-zone.directive';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FileUploadPipe } from './file-upload/file-upload.pipe';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatChipsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
// tslint:disable-next-line: max-line-length
  declarations: [NavComponent, EmailSignupComponent, FooterComponent, BubblesComponent, TagViewerComponent, BlogCardComponent, DropZoneDirective, FileUploadComponent, FileUploadPipe],
  exports: [
    NavComponent,
    FooterComponent,
    EmailSignupComponent,
    BubblesComponent,
    TagViewerComponent,
    BlogCardComponent,
    FileUploadComponent,
  ]
})
export class CoreModule { }
