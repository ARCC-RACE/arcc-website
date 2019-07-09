import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {HomeModule} from './home/home.module';
import {AppRoutingModule} from './app-routing.module';
import { RouterModule } from '@angular/router';
import {FragmentPolyfillModule} from './fragment-polyfill/fragment-polyfill.module';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import {MarkdownModule} from 'ngx-markdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgAisModule } from 'angular-instantsearch';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HomeModule,
    RouterModule,
    AppRoutingModule,
    FragmentPolyfillModule.forRoot({
      smooth: true
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MarkdownModule.forRoot(),
    BrowserAnimationsModule,
    NgAisModule.forRoot()
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
