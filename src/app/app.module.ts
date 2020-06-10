import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostHeaderComponent } from './components/post-header/post-header.component';
import { PostImgComponent } from './components/post-img/post-img.component';
import { PostLikeComponent } from './components/post-like/post-like.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    PostHeaderComponent,
    PostImgComponent,
    PostLikeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
