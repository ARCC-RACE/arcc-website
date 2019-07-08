import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AllComponent} from './blog/all/all.component';
import {PostComponent} from './blog/post/post.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'blog',
    loadChildren: './blog/blog.module#BlogModule'
  },
  {
    path: 'editor',
    loadChildren: './blog-editor/blog-editor.module#BlogEditorModule'
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: 'support',
    loadChildren: './support/support.module#SupportModule'
  },
  {
    path: '**',
    component: HomeComponent
  },
  // { path: `/cart`, loadChildren: () => import(`./cart/cart.module`).then(m => m.CartModule) }
  // TODO: Refactor routes to look like the above example (Enables type checking and other stuff)

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
