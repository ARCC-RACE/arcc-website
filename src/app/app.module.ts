import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {HomeModule} from './home/home.module';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {BlogModule} from './blog/blog.module';
import {FragmentPolyfillModule} from './fragment-polyfill/fragment-polyfill.module';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HomeModule,
    RouterModule,
    BlogModule,
    AppRoutingModule,
    FragmentPolyfillModule.forRoot({
      smooth: true
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
