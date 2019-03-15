import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooComponent } from './foo.component';
import { FoowithComponent } from './foowith/foowith.component';
import { FooInnerComponent } from './foo-inner.component';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent, //when create an component using "ng generate component foo --flat"
    FoowithComponent, FooInnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
