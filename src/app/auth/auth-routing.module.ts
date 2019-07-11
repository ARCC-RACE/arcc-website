import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from '../_guards/auth.guard';

const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AuthRoutingModule {

}
