import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../_models/post.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  private postDoc: AngularFirestoreDocument<any>;
  post: Post;
  commentForm: FormGroup;

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getPost(params.get('id'));
    });
    this.commentForm = this.fb.group({
      comment: ['', Validators.required]
    });
  }

  getPost(postId) {
    this.postDoc = this.afs.doc('posts/' + postId);
    // @ts-ignore
    this.post = this.postDoc.valueChanges();
  }

  async submit() {
    const formValue = this.commentForm.value;
    console.log(formValue);
  }

}
