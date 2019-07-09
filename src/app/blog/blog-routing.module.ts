import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostComponent} from './post/post.component';
import {AllComponent} from './all/all.component';
import { SearchComponent } from './all/search/search.component';

const editorRoutes: Routes = [
  {
    path: '',
    component: AllComponent
  },
  {
    path: 'post/:id',
    component: PostComponent
  },
  {
    path: 'test',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(editorRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class BlogRoutingModule {

}
