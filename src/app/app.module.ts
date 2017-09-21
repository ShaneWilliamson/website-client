import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioEntryComponent } from './portfolio-entry/portfolio-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    PortfolioEntryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
