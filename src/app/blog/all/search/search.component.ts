import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  algoliaConfig = {
    apiKey: 'e73dee597304c92fdaceb339109cbbb0',
    appId: 'MT2VAQ4QO4',
    indexName: 'blog'
  };

  constructor() { }

  ngOnInit() {
  }

}
