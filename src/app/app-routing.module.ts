import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { KbDetailComponent } from './knowledge-base/kb-detail/kb-detail.component';
import { AngularjsComponent } from './angularjs/angularjs.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: "full"},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'kb', component: KnowledgeBaseComponent},
  {path: 'kb/:id', component: KbDetailComponent},
  // {path: 'angular', component: AngularComponent},
  {path: 'angularjs', component: AngularjsComponent},
  // {path: 'html5', component: Html5Component},
  // {path: 'javascript', component: JavascriptComponent},
  // {path: 'sass', component: SassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
