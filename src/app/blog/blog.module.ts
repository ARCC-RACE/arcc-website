import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { AllComponent } from './all/all.component';
import {BlogRoutingModule} from './blog-routing.module';
import {MarkdownModule} from 'ngx-markdown';
import { MatChipsModule } from '@angular/material/chips';
import { CoreModule } from '../core/core.module';
import { NgAisModule } from 'angular-instantsearch';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    MarkdownModule,
    MatChipsModule,
    CoreModule,
    NgAisModule
  ],
  declarations: [PostComponent, AllComponent]
})
export class BlogModule { }
