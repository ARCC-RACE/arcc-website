import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportComponent } from './support.component';

const supportRoutes: Routes = [
  {
    path: '',
    component: SupportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(supportRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class SupportRoutingModule {

}
