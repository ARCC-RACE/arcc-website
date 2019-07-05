import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import {Post} from '../../_models/post.model';

@Component({
  selector: 'app-editor-post',
  templateUrl: './editor-post.component.html',
  styleUrls: ['./editor-post.component.scss']
})
export class EditorPostComponent implements OnInit {
  private postDoc: AngularFirestoreDocument<Post>;
  formModel: Post;
  constructor(private afs: AngularFirestore, private route: ActivatedRoute) {}
  previewText: any;

  update() {
    if (this.postDoc) {
      // TODO throttle update
      console.log(this.formModel.content);
      this.previewText = this.formModel.content;
      this.postDoc.update(this.formModel).then();
    }
  }

  ngOnInit() {
    this.formModel = {title: '', content: '', author: ''};
    // subscribe to the parameters observable
    this.route.paramMap.subscribe(params => {
      this.getPost(params.get('id'));
    });
  }

  getPost(postId) {
    this.postDoc = this.afs.doc('posts/' + postId);
    this.postDoc.valueChanges().subscribe(v => {
      this.formModel = v;
    });
  }

}
