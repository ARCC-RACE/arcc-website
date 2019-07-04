import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostComponent} from './post/post.component';
import {AllComponent} from './all/all.component';

const editorRoutes: Routes = [
  {
    path: 'post/:id',
    component: PostComponent
  },
  { path: '',
    component: AllComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(editorRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class BlogRoutingModule {

}
