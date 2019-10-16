import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		ContactPageComponent,
		PortfolioPageComponent
	],
	imports: [
		BrowserModule,
		MatCardModule,
		AppRoutingModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
