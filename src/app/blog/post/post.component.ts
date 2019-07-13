import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {ActivatedRoute} from '@angular/router';
import {Post, Comment} from '../../_models/post.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/_models/user.model';

/**
 * Handles displaying the current post and user commenting features
 */
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  // TODO this whole file is a mess, theres definitely a way better way to do this
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

  /**
   * Gets data from the route about what ID the user is looking at
   * Sets up comment form
   * Subscribes to the current user
   * Gets the current post as a regular object
   */
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

  /**
   * Gets the post from firebase
   * @param postId ID of the post
   */
  async getPost(postId: string) {
    this.postDoc = this.afs.doc('posts/' + postId);
    // @ts-ignore
    this.post = this.postDoc.valueChanges();
  }

  /**
   * Handles submit of commenting form
   */
  async submit() {
    // Sets form
    const formValue = this.commentForm.value;
    // Sets profile
    const profileURL = this.user.photoURL;
    // Sets username
    const userName = this.user.displayName;
    // Gets formated date
    const d = new Date();
    const formatedDate = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
    // Creates comment object
    const comment: Comment = {
      author: userName,
      profilePhoto: profileURL,
      comment: formValue.comment,
      date: formatedDate
    };
    // Pushes the comment onto the array
    this.hardPost.comments.push(comment);
    // Updates the post in the cloud
    this.authService.updateBlogPost(this.hardPost, this.postId);
  }
}
