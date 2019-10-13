import { Component, OnInit } from '@angular/core';

// import { AppComponent } from '../app.component';
// import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // access other components and share data
  // users: any;
  // title = new AppComponent().title;
  // usersList = new HomeComponent(this.users);

  constructor() { }

  ngOnInit() {
  }

}
