import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-angularjs',
  templateUrl: './angularjs.component.html',
  styleUrls: ['./angularjs.component.scss']
})
export class AngularjsComponent implements OnInit {

  
  knowledgeBaseAngularJS: {};
  //private linksArr: {};
  //private knowledgeBase: {};

  constructor(private data: DataService) { }

  ngOnInit() {


    this.data.getKnowledgeBaseAngularJS().subscribe(data => {      
      this.knowledgeBaseAngularJS = data;
      console.log('ngOnInit | knowledgeBaseAngularJS = ', this.knowledgeBaseAngularJS)
      buildLinksArray(data);
      //this.linksArr = this.data.links;
      //console.log('ngOnInit | linksArr = ', this.linksArr)
   });


   function buildLinksArray(data: Object){

    //this.linksArr = data.links;
    console.log('buildLinksArray | data = ', data)

   }

//    this.data.getKnowledgeBase().subscribe(data => {  
         
//     this.knowledgeBase = data;
//      console.log('ngOnInit | knowledgeBase = ', this.knowledgeBase)
//  });


  }

}
