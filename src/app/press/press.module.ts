import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PressComponent } from './press.component';
import { PressRoutingModule } from './press-routing.module';
import { MatChipsModule } from '@angular/material/chips';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [PressComponent],
  imports: [
    CommonModule,
    PressRoutingModule,
    MatChipsModule,
    CoreModule
  ]
})
export class PressModule { }
