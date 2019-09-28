import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // typescript way
  appTitle: string = 'sarmbrec';
  collapsed = true;
  //js way
  //appTitle = 'sarmbrec';

  constructor() { }

  ngOnInit() {

    //console.log('hello from nav component')

  }

}
