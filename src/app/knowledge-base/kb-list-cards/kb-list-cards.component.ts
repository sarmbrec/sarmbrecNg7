import { Component, Input, Output, EventEmitter } from '@angular/core';
import { KbInterface } from '../../interfaces/kb';

@Component({
  selector: 'app-kb-list-cards',
  templateUrl: './kb-list-cards.component.html',
  styleUrls: ['./kb-list-cards.component.scss']
})
export class KbListCardsComponent {

  @Input() items: KbInterface;
  @Output() onItemSelected = new EventEmitter<KbInterface>();

  constructor() { }

  public itemClicked(item: KbInterface): void {
    this.onItemSelected.next(item);
  }

}
