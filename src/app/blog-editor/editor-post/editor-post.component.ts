import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import {Post} from '../../_models/post.model';

/**
 * Editor for individual blog posts
 */
@Component({
  selector: 'app-editor-post',
  templateUrl: './editor-post.component.html',
  styleUrls: ['./editor-post.component.scss', '../blog-editor.scss']
})
export class EditorPostComponent implements OnInit {
  private postDoc: AngularFirestoreDocument<Post>; // Post object
  formModel: Post; // Form Models
  constructor(private afs: AngularFirestore, private route: ActivatedRoute) {}
  previewText: any; // Preview text for displaying markdown render
  postId: string;
  tags: string[]; // Tags that are set up automatically

  /**
   * Updates the blog post with new data
   */
  update() {
    if (this.postDoc) {
      // TODO throttle update
      this.previewText = this.formModel.content;
      this.postDoc.update(this.formModel).then();
    }
  }

  /**
   * Sets up form model and gets the id of the post
   */
  ngOnInit() {
    // Sets up form Model
    this.formModel = {title: '', content: '', author: '', tags: [''], date: '', comments: null, objectID: null};
    // subscribe to the parameters observable
    this.route.paramMap.subscribe(params => {
      this.getPost(params.get('id'));
    });
  }

  /**
   * Gets the post from the database
   * @param postId ID of the post
   */
  getPost(postId) {
    this.postId = postId;
    this.postDoc = this.afs.doc('posts/' + postId);
    this.postDoc.valueChanges().subscribe(v => {
      this.formModel = v;
    });
  }

}
