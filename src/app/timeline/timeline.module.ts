import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineRoutingModule } from './timeline-routing.module';
import { ContentComponent } from './content/content.component';
import {CoreModule} from '../core/core.module';
import { VerticalTimelineModule } from 'angular-vertical-timeline';


@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    TimelineRoutingModule,
    CoreModule,
    VerticalTimelineModule
  ]
})
export class TimelineModule { }
