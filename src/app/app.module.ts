import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CarouselHomePageComponent } from './home/carousel-home-page/carousel-home-page.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { FooterComponent } from './footer/footer.component';
import { KbDetailComponent } from './knowledge-base/kb-detail/kb-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DefaultAngularLandingPageComponent } from './home/default-angular-landing-page/default-angular-landing-page.component';
import { MessagesComponent } from './messages/messages.component';

import { TestimonialsComponent } from './about/testimonials/testimonials.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { SocialLinksComponent } from './header/social-links/social-links.component';
import { NgObservableComponent } from './ng-observable/ng-observable.component';
import { KbListCardsComponent } from './knowledge-base/kb-list-cards/kb-list-cards.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceListComponent } from './experience/experience-list/experience-list.component';
import { ChartsModule } from 'ng2-charts';
import { RemoveWhiteSpacesPipe } from './embrace-the-pipe/remove-white-spaces.pipe';
import { ExperienceDetailComponent } from './experience/experience-detail/experience-detail.component';
import { ChartsComponent } from './charts/charts.component';
import { PolarAreaComponent } from './charts/polar-area/polar-area.component';
import { BarComponent } from './charts/bar/bar.component';
import { KbJumbotronComponent } from './knowledge-base/kb-jumbotron/kb-jumbotron.component';
import { ExperienceJumbotronComponent } from './experience/experience-jumbotron/experience-jumbotron.component';

// The App module file is basically where all imports and generated files are recorded
// with their configuration metadata in the NgModule object.
// As a footnote, all components go into declarations, services into providers and
// modules into imports.
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    CarouselHomePageComponent,
    KnowledgeBaseComponent,
    FooterComponent,
    KbDetailComponent,
    PageNotFoundComponent,
    DefaultAngularLandingPageComponent,
    MessagesComponent,
    
    TestimonialsComponent,
    HeaderComponent,
    NavBarComponent,
    SocialLinksComponent,
    NgObservableComponent,
    KbListCardsComponent,
    ExperienceComponent,
    ExperienceListComponent,
    RemoveWhiteSpacesPipe,
    ExperienceDetailComponent,
    ChartsComponent,
    PolarAreaComponent,
    BarComponent,
    KbJumbotronComponent,
    ExperienceJumbotronComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
