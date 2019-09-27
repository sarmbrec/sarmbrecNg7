import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

import { CarouselHomePageComponent } from './carousel-home-page/carousel-home-page.component';
import { GitHubIconLinkComponent } from './git-hub-icon-link/git-hub-icon-link.component';



// The App module file is basically where all imports and generated files are recorded 
// with their configuration metadata in the NgModule object. 
// As a footnote, all components go into declarations, services into providers and 
// modules into imports.


@NgModule({
  declarations: [
    NavComponent,
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    CarouselHomePageComponent,
    GitHubIconLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    //BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    //HttpClientModule,
    // FormsModule,
    // RouterModule.forRoot([
    //   { path: '', component: HomeComponent, pathMatch: 'full' },
    //   { path: 'counter', component: CounterComponent },
    //   { path: 'fetch-data', component: FetchDataComponent },
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
