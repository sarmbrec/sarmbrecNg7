import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { KbInterface } from '../interfaces/kb';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.scss']
})

export class KnowledgeBaseComponent implements OnInit {
  kbstack$: Observable<KbInterface[]>;
  selectedItem: KbInterface;
  onItemSelected: any;

  constructor(
    private service: DataService
  ) { }

  public ngOnInit(): void {
    this.kbstack$ = this.service.getKnowledgeBaseAsync();
  }

  public selectItem(item: KbInterface): void {
    this.selectedItem = item;
  }
}


