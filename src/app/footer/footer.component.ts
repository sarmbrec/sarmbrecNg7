import { Component, OnInit } from '@angular/core';

// import { AppComponent } from '../app.component';
// import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // access other components and share data
  // users: any;
  // title = new AppComponent().title;
  // usersList = new HomeComponent(this.users);
  constructor() { }

  ngOnInit() {
  }

}
