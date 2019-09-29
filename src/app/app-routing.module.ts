import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AngularComponent } from './angular/angular.component';
import { AngularjsComponent } from './angularjs/angularjs.component';
import { Html5Component } from './html5/html5.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { SassComponent } from './sass/sass.component';


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: "full"},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'angular', component: AngularComponent},
  {path: 'angularjs', component: AngularjsComponent},
  {path: 'html5', component: Html5Component},
  {path: 'javascript', component: JavascriptComponent},
  {path: 'sass', component: SassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
