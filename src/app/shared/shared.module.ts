
// https://medium.com/dev-jam/5-tips-best-practices-to-organize-your-angular-project-e900db08702e
// In short, when using a Shared Module:
// DO declare components, pipes, directives, and export them.
// DO import FormsModule, ReactiveFormsModule and other (3rd-party) modules you need.
// DO import the SharedModule into any other Feature Modules.
// DO NOT provide app-wide singleton services in your SharedModule. Instead move these to the CoreModule.
// DO NOT import the SharedModule into the AppModule.

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonAComponent } from './button-a/button-a.component';
import { ButtonBComponent } from './button-b/button-b.component';

@NgModule({
  declarations: [
    ButtonAComponent, 
    ButtonBComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ButtonAComponent,
    ButtonBComponent,
    FormsModule
  ]
})
export class SharedModule { }
