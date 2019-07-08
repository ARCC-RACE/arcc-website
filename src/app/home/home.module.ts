import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { ProjectsComponent } from './projects/projects.component';
import { DeepracerComponent } from './deepracer/deepracer.component';
import { RaceComponent } from './race/race.component';
import { JetsonComponent } from './jetson/jetson.component';
import { ClubMembersComponent } from './club-members/club-members.component';
import { FounderLetterComponent } from './founder-letter/founder-letter.component';
import { FunFactComponent } from './fun-fact/fun-fact.component';
import { BlogComponent } from './blog/blog.component';
import {FragmentPolyfillModule} from '../fragment-polyfill/fragment-polyfill.module';
import {RouterModule} from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FragmentPolyfillModule.forRoot({
      smooth: true
    }),
    RouterModule,
    HomeRoutingModule,
    CoreModule
  ],
  declarations: [
    HomeComponent,
    BannerComponent,
    ProjectsComponent,
    DeepracerComponent,
    RaceComponent, JetsonComponent, ClubMembersComponent, FounderLetterComponent, FunFactComponent, BlogComponent],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
