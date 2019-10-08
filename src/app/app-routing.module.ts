import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { KbDetailComponent } from './knowledge-base/kb-detail/kb-detail.component';

import { DefaultAngularLandingPageComponent } from './home/default-angular-landing-page/default-angular-landing-page.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'kb', component: KnowledgeBaseComponent},
  {path: 'kb/:id', component: KbDetailComponent},

  {path: 'applandingpage', component: DefaultAngularLandingPageComponent},

  {path: '', component: HomeComponent, pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
