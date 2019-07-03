import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorPostComponent } from './editor-post/editor-post.component';
import { EditorPostsComponent } from './editor-posts/editor-posts.component';
import {FormsModule} from '@angular/forms';
import {BlogEditorRoutingModule} from './blog-editor-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BlogEditorRoutingModule
  ],
  declarations: [EditorPostComponent, EditorPostsComponent]
})
export class BlogEditorModule { }
