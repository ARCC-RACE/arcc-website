import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';
import {Post} from '../../_models/post.model';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Component({
  selector: 'app-editor-posts',
  templateUrl: './editor-posts.component.html',
  styleUrls: ['./editor-posts.component.scss', '../blog-editor.scss']
})
export class EditorPostsComponent implements OnInit {
  private postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<any[]>;

  constructor(
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.postsCollection = afs.collection<Post>('posts');
    this.posts = this.postsCollection.snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        });
      }));
  }

  ngOnInit() {
  }

  onEnter(new_post_title: any, new_post_author: any, new_post_text: any) {
    const d = new Date();
    const formatedDate = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
    // tslint:disable-next-line: max-line-length
    const post: Post = {title: new_post_title.value, content: new_post_text.value, author: new_post_author.value, tags: [''], date: formatedDate, comments: null};
    this.addItem(post, (domInput => {
      return data => {
        domInput.value = ''; // empty dom input
        // this.router.navigate(['/']);
        this.router.navigate([`/editor/post/${data.id}`]).then();
        // TODO: Redirect to post with post id
      };
    })(new_post_title) );
    // If post request is successful: clear input; notify user
  }

  deleteItem(id) {
    this.afs.collection('posts').doc(id).delete().then();
  }

  addItem(post: Post, successCb?, errCb?) {
    // TODO: Implement loading Animation
    this.postsCollection.add(post).then(data => {
      successCb(data);
    }).catch(err => {
      if (errCb) {
        errCb(err);
      } else {
        console.log(err);
      }
    });
  }
}
