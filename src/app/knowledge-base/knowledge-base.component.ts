import { Component, OnInit } from '@angular/core';
import { KnowledgeBaseService } from './knowledge-base.service';
import { KbInterface } from './kb';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.scss']
})

export class KnowledgeBaseComponent implements OnInit {
  someData$: Observable<KbInterface[]>;
  selectedItem: KbInterface;  
  onItemSelected: any;

  constructor(
    private kbData: KnowledgeBaseService
  ) { }

  public ngOnInit(): void {
    this.someData$ = this.kbData.getKnowledgeBaseAsynch();
  }  
  
  public selectItem(item: KbInterface): void {
    this.selectedItem = item;
  }
}


