import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }  from '@angular/http';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';
import { PostCounterComponent }  from './components/post-counter.component';
import { PostPreviewComponent }  from './components/post-preview/post-preview.component';
import { ScrollDirective }  from './directives/scroll.directive';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, UserComponent, PostCounterComponent, PostPreviewComponent, ScrollDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
