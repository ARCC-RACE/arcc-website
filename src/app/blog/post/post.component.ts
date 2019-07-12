import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {ActivatedRoute} from '@angular/router';
import {Post, Comment} from '../../_models/post.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/_models/user.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  private postDoc: AngularFirestoreDocument<any>;
  post: Observable<Post>;
  hardPost: Post;
  commentForm: FormGroup;
  postId: string;
  user: User;

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public authService: AuthService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getPost(params.get('id'));
      this.postId = params.get('id');
    });
    this.commentForm = this.fb.group({
      comment: ['', Validators.required]
    });
    this.authService.user$.subscribe(value => {
      this.user = value;
    });
    this.post.subscribe(value => {
      this.hardPost = value;
    });
  }

  async getPost(postId: string) {
    this.postDoc = this.afs.doc('posts/' + postId);
    // @ts-ignore
    this.post = this.postDoc.valueChanges();
  }

  async submit() {
    const formValue = this.commentForm.value;
    const profileURL = this.user.photoURL;
    const userName = this.user.displayName;
    const d = new Date();
    const formatedDate = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
    const comment: Comment = {
      author: userName,
      profilePhoto: profileURL,
      comment: formValue.comment,
      date: formatedDate
    };
    console.log(comment);
    this.hardPost.comments.push(comment);
    console.log(this.hardPost);
    this.authService.updateBlogPost(this.hardPost, this.postId);
  }
}
