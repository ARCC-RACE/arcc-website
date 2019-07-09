import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorPostComponent } from './editor-post/editor-post.component';
import { EditorPostsComponent } from './editor-posts/editor-posts.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BlogEditorRoutingModule} from './blog-editor-routing.module';
import {MarkdownModule} from 'ngx-markdown';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestore} from '@angular/fire/firestore';
import { TagsComponent } from './tags/tags.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BlogEditorRoutingModule,
    AngularFireModule,
    MarkdownModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatFormFieldModule
  ],
  declarations: [EditorPostComponent, EditorPostsComponent, TagsComponent],
  providers: [AngularFirestore]
})
export class BlogEditorModule { }
