import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag-viewer',
  templateUrl: './tag-viewer.component.html',
  styleUrls: ['./tag-viewer.component.scss']
})
export class TagViewerComponent implements OnInit {

  @Input() tags: string[];

  public getColor(tag: string): string {
    switch (tag) {
      case 'Machine Learning':
        return '#e53935';
        break;
      case 'AI':
        return '#8e24aa';
        break;
      case 'Deep Racer':
        return '#43a047';
        break;
      case 'Jetson Car':
        return '#fb8c00';
        break;
      case 'News':
        return '#00897b';
        break;
      case 'Press':
        return '#1e88e5';
        break;
      default:
        return '#546e7a';
    }
 }

  constructor() { }

  ngOnInit() {
  }

}
