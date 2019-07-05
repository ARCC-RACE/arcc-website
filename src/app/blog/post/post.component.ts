import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../_models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private postDoc: AngularFirestoreDocument<any>;
  post: Post;
  constructor(private afs: AngularFirestore, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getPost(params.get('id'));
    });
  }

  getPost(postId) {
    this.postDoc = this.afs.doc('posts/' + postId);
    // @ts-ignore
    this.post = this.postDoc.valueChanges();
  }

}
