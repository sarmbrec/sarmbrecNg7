import { Component, OnInit } from '@angular/core';
import { KnowledgeBaseService } from '../knowledge-base/knowledge-base.service';
import { KbInterface } from '../knowledge-base/kb';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  someData$: Observable<KbInterface[]>;
  
  constructor(
    private kbData: KnowledgeBaseService
  ) { }

  public ngOnInit(): void {
    this.someData$ = this.kbData.getKnowledgeBaseAsynch();
  }  
  
  

}
