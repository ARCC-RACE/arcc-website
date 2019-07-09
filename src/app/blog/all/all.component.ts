import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Post} from '../../_models/post.model';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  algoliaConfig = {
    apiKey: 'e73dee597304c92fdaceb339109cbbb0',
    appId: 'MT2VAQ4QO4',
    indexName: 'blog'
  };

  ngOnInit() {
  }

}
