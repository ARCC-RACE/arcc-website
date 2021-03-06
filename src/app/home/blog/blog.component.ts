import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Post} from '../../_models/post.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  private postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<any>;

  constructor(private afs: AngularFirestore) {
    this.postsCollection = afs.collection<any>('posts');
    this.posts = this.postsCollection.snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
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
