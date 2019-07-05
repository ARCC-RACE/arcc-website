import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Post} from '../../_models/post.model';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  private postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<any>;

  constructor(private afs: AngularFirestore) {
    this.postsCollection = afs.collection<Post>('posts');
    this.posts = this.postsCollection.snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          data.content = data.content.split(' ').slice(0, 20).join(' ');
          const id = a.payload.doc.id;
          return { id, data };
        });
      }));
  }

  ngOnInit() {
  }

}
