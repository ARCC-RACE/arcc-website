import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SlideInOutAnimation} from './animations';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {skip} from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [SlideInOutAnimation]
})
export class NavComponent implements OnInit{

  constructor(private router: Router) {}

  ngOnInit() {
    // Jank solution so it doesn't open on page load
    this.router.events.pipe(skip(5)).forEach((event) => {
      if (event instanceof NavigationStart) {
        this.toggleCollapse();
      }
    });
  }
  open = false;
  animationState = 'out';

  toggleCollapse() {
// this.show = !this.show
    this.animationState = this.animationState === 'out' ? 'in' : 'out';
  }

}
