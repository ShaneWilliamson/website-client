import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AppComponent } from './app.component';


const routes: Routes = [
	{ path: '', redirectTo: 'about', pathMatch: 'full' },
{ path: 'about', component: HomePageComponent },
{ path: 'portfolio', component: PortfolioPageComponent },
{ path: 'contact', component: ContactPageComponent },
{ path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
