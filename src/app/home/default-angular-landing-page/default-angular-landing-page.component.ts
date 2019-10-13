import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'app-default-angular-landing-page',
  templateUrl: './default-angular-landing-page.component.html',
  styleUrls: ['./default-angular-landing-page.component.scss']
})
export class DefaultAngularLandingPageComponent implements OnInit {

  title = new AppComponent().title;

  constructor() { }

  ngOnInit() {
  }

}
