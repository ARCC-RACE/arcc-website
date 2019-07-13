import { Component, OnInit, Input } from '@angular/core';
import { post } from 'selenium-webdriver/http';

/**
 * Post card for use in blogs and press
 */
@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  // Post object
  @Input() post;

  constructor() { }

  ngOnInit() {
  }

}
