import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { AllComponent } from './all/all.component';
import { CardComponent } from './all/card/card.component';
import {BlogRoutingModule} from './blog-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [PostComponent, AllComponent, CardComponent],
  exports: [
    AllComponent,
    PostComponent
  ]
})
export class BlogModule { }
