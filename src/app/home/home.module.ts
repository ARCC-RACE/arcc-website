import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerOneComponent } from './banner-one/banner-one.component';
import { ServiceOneComponent } from './service-one/service-one.component';
import { CtaOneComponent } from './cta-one/cta-one.component';
import { CtaTwoComponent } from './cta-two/cta-two.component';
import { CtaThreeComponent } from './cta-three/cta-three.component';
import { PricingOneComponent } from './pricing-one/pricing-one.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BrandStyleComponent } from './brand-style/brand-style.component';
import { FunFactComponent } from './fun-fact/fun-fact.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    BannerOneComponent,
    ServiceOneComponent,
    CtaOneComponent,
    CtaTwoComponent, CtaThreeComponent, PricingOneComponent, TestimonialsComponent, BrandStyleComponent, FunFactComponent, BlogComponent],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
