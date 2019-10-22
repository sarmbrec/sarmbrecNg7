import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { FooterComponent } from './footer/footer.component';
import { KbDetailComponent } from './knowledge-base/kb-detail/kb-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


import { TestimonialsComponent } from './about/testimonials/testimonials.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { SocialLinksComponent } from './header/social-links/social-links.component';

import { KbListCardsComponent } from './knowledge-base/kb-list-cards/kb-list-cards.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceListComponent } from './experience/experience-list/experience-list.component';
import { ChartsModule } from 'ng2-charts';
import { RemoveWhiteSpacesPipe } from './pipe/RemoveWhiteSpacesPipe';
import { ExperienceDetailComponent } from './experience/experience-detail/experience-detail.component';

import { CarouselComponent } from './shared/carousel/carousel.component';
import { ListComponent } from './about/testimonials/list/list.component';
import { TechnologyUsedComponent } from './shared/charts/technology-used/technology-used.component';

import { JumbotronComponent } from './shared/jumbotrons/jumbotron.component';


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
    KnowledgeBaseComponent,
    KbDetailComponent,
    ExperienceComponent,
    ExperienceDetailComponent,
    PageNotFoundComponent,
    FooterComponent,
    TestimonialsComponent,
    HeaderComponent,
    NavBarComponent,
    SocialLinksComponent,
    KbListCardsComponent,
    ExperienceListComponent,
    RemoveWhiteSpacesPipe,
    JumbotronComponent,
    CarouselComponent,
    ListComponent,
    TechnologyUsedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
