import { trigger, state, style, transition,
  animate, group
} from '@angular/animations';

export const SlideInOutAnimation = [
  trigger('slideInOut', [
    state('in', style({
      'max-height': '500px', 'opacity': '1', 'visibility': 'visible', 'display': 'block'
    })),
    state('out', style({
      'max-height': '0px', 'opacity': '1', 'visibility': 'visible'
    })),
    transition('in => out', [group([
        animate('600ms ease-in-out', style({
          'max-height': '0px'
        })),
      ]
    )]),
    transition('out => in', [group([
        animate('600ms ease-in-out', style({
          'max-height': '500px'
        })),
      ]
    )])
  ]),
]
