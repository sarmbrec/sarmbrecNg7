import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-angularjs',
  templateUrl: './angularjs.component.html',
  styleUrls: ['./angularjs.component.scss']
})
export class AngularjsComponent implements OnInit {

  //appTitle: string = 'sarmbrec';
  // knowledgeBaseAngularJS = {};
  // linksArr = [];
  // showAngularJSTab: string = 'sarmbrec';
  // showTab: string = 'getting-started';
  //private knowledgeBase: {};

  //constructor(private data: DataService) { }
  constructor(){}


  
  // ShowHideAngularJSTab (event) {
  //   //console.log('event.target.getAttribute = ', event.target.getAttribute('data-category'))
  //   this.showAngularJSTab = event.target.getAttribute('data-category');
  // };


  // ShowHideTab(event) {
  //   //console.log('event.target.getAttribute = ', event.target.getAttribute('data-category'))
  //   this.showTab = event.target.getAttribute('data-category');
  // };


  ngOnInit() {   
  //   this.data.getKnowledgeBaseAngularJS().subscribe(data => {      
  //     this.knowledgeBaseAngularJS = data;
  //     //this.linksArr = this.knowledgeBaseAngularJS.techStack.links;
  //     //console.log('ngOnInit | knowledgeBaseAngularJS = ', this.knowledgeBaseAngularJS)
  //  });
  }


}
