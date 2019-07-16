import { Component, OnInit } from '@angular/core';
import { Post } from '../_models/post.model';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss']
})
export class PressComponent implements OnInit {

  private postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<any>;
  loading = true;

  constructor(private afs: AngularFirestore) {
    this.postsCollection = afs.collection<Post>('posts');
    this.posts = this.postsCollection.snapshotChanges()
      .pipe(map(actions => {
        // this.loading = false;
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          data.content = data.content.split(' ').slice(0, 20).join(' ');
          const id = a.payload.doc.id;
          data.objectID = id;
          return { id, data };
        });
      }));
  }

  ngOnInit() {
  }

}
