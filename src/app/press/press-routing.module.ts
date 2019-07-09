import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PressComponent } from './press.component';

const pressRoutes: Routes = [
  {
    path: '',
    component: PressComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(pressRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class PressRoutingModule {

}
