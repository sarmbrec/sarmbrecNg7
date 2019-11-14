import { Component, Input, Output, EventEmitter } from '@angular/core';
import { KbInterface } from '../../interfaces/kb';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-kb-list-cards',
  templateUrl: './kb-list-cards.component.html',
  styleUrls: ['./kb-list-cards.component.scss']
})

export class KbListCardsComponent {
  baseUrl = environment.baseUrl;

  @Input() items: KbInterface;
  @Output() onItemSelected = new EventEmitter<KbInterface>();

  constructor() { }

  public itemClicked(item: KbInterface): void {
    this.onItemSelected.next(item);
  }

}
