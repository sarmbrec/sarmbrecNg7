import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
import { KnowledgeBaseService } from './knowledge-base.service';
// import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.scss']
})
export class KnowledgeBaseComponent implements OnInit {
  knowledgeBase: {};

  constructor(
    private kbData: KnowledgeBaseService
  ) { }

  ngOnInit() {
    this.kbData.getKnowledgeBase().subscribe(data => {
      this.knowledgeBase = data;
      // console.log('ngOnInit | KnowledgeBaseComponent = ', this.knowledgeBase)
    });
  }

}
