import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CarouselHomePageComponent } from './carousel-home-page/carousel-home-page.component';
import { GitHubIconLinkComponent } from './git-hub-icon-link/git-hub-icon-link.component';
import { AngularjsComponent } from './angularjs/angularjs.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { FooterComponent } from './footer/footer.component';

import { KbDetailComponent } from './knowledge-base/kb-detail/kb-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DefaultAngularLandingPageComponent } from './default-angular-landing-page/default-angular-landing-page.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { KbHtmlContentComponent } from './knowledge-base/kb-html-content/kb-html-content.component';

// The App module file is basically where all imports and generated files are recorded 
// with their configuration metadata in the NgModule object. 
// As a footnote, all components go into declarations, services into providers and 
// modules into imports.
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    CarouselHomePageComponent,
    GitHubIconLinkComponent,
    AngularjsComponent,
    KnowledgeBaseComponent,
    FooterComponent,    
    KbDetailComponent,
    PageNotFoundComponent,
    DefaultAngularLandingPageComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    KbHtmlContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
    //BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    
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
