import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule } from '@angular/forms';
//import { FormsModule } from '@angular/forms';

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
import { KnowledgeBaseDetailComponent } from './knowledge-base-detail/knowledge-base-detail.component';
import { KbDetailComponent } from './knowledge-base/kb-detail/kb-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    KnowledgeBaseDetailComponent,
    KbDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
    //BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
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
