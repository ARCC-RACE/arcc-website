import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { FeatureComponent } from './feature/feature.component';
import { DiscoverComponent } from './discover/discover.component';
import { BlogFeatureComponent } from './blog-feature/blog-feature.component';
import { PressComponent } from './press/press.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, HighlightsComponent, FeatureComponent, DiscoverComponent, BlogFeatureComponent, PressComponent]
})
export class HomeModule { }
