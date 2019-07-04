import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SlideInOutAnimation} from './animations';
import {ActivationEnd, ActivationStart, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {skip} from 'rxjs/operators';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [SlideInOutAnimation]
})
export class NavComponent implements OnInit {
  open = false;
  animationState = 'out';
  notMobile = false;

  constructor(
    private router: Router,
    public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    // Jank solution so it doesn't open on page load
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
      }
    });

    this.breakpointObserver
      .observe(['(min-width: 1200px)'])
      .subscribe((breakpointState: BreakpointState) => {
        if (breakpointState.matches) {
          this.animationState = 'in';
          this.notMobile = true;
        } else {
          this.animationState = 'out';
        }
      });
  }


  toggleCollapse() {
// this.show = !this.show
    if (!this.notMobile) {
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
    }
  }

}
