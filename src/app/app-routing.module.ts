import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: "full"},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}
  // {path:  "", redirectTo: "home"},
  // {path: "home", pathMatch: "full", component: HomeComponent},
  // {path: "about", pathMatch: "full", component: AboutComponent},
  // {path: "contact", pathMatch: "full", component: ContactComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
