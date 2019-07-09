import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { AllComponent } from './all/all.component';
import { CardComponent } from './all/card/card.component';
import {BlogRoutingModule} from './blog-routing.module';
import {MarkdownModule} from 'ngx-markdown';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    MarkdownModule,
    MatChipsModule
  ],
  declarations: [PostComponent, AllComponent, CardComponent]
})
export class BlogModule { }
