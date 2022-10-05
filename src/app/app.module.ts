import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { AState } from './states/a.state';

import { AppComponent } from './app.component';
import { BState } from './states/b.state';
import { ShowStateComponent } from './show-state/show-state.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  declarations: [AppComponent, ShowStateComponent, Page1Component, Page2Component],
  imports: [BrowserModule, NgxsModule.forRoot([AState, BState])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
