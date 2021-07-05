import { LinksModule } from './links/links.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  providers: [],
  imports: [BrowserModule, LinksModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule { }
