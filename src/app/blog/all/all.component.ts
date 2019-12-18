import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import * as algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  'MT2VAQ4QO4',
  '5ed00428eb4ea61db6ef4a1a74fab38b'
);

/**
 * Displays all of the blog posts and allows search through Algolia
 */
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) {}

  config = {
    indexName: 'blog',
    searchClient
  };

  ngOnInit() {
  }

}
