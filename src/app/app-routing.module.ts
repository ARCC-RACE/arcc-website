import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AllComponent} from './blog/all/all.component';
import {PostComponent} from './blog/post/post.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'blog',
    component: AllComponent
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
