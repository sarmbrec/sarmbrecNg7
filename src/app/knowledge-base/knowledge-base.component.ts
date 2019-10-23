import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { KbInterface } from '../interfaces/kb';
import { Observable } from 'rxjs';

import { JumboTron } from '../interfaces/jumbotron';

@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.scss']
})

export class KnowledgeBaseComponent implements OnInit {
  kbstack$: Observable<KbInterface[]>;
  selectedItem: KbInterface;
  onItemSelected: any;
  jumboTronKB$: Observable<JumboTron>;

  constructor(
    private service: DataService
  ) { }

  public ngOnInit(): void {
    this.kbstack$ = this.service.getKnowledgeBaseAsync();
    this.jumboTronKB$ = this.service.getJumbotronItemAsync('albert-einstein');
  }

  public selectItem(item: KbInterface): void {
    this.selectedItem = item;
  }
}


