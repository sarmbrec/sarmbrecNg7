import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  collapsed: boolean = true;

  appTitle: string = new AppComponent().title;

  constructor() { }

  ngOnInit() {
  }

}
