import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.scss']
})
export class KnowledgeBaseComponent implements OnInit {

  //define the result object
  knowledgeBase: {};

  constructor(private data: DataService) { }

  ngOnInit() {
    //TODO: seperate this out to its own services for knowledge base
    this.data.getKnowledgeBase().subscribe(data => {      
      this.knowledgeBase = data;
      //  console.log('ngOnInit | myResult = ', this.myResult)
   });

  }

}
