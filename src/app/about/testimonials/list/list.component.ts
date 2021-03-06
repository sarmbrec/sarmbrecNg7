import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FakeUsersListInterface } from '../../../interfaces/fake-users-list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {

  @Input() items: FakeUsersListInterface;
  @Output() onItemSelected = new EventEmitter<FakeUsersListInterface>();

  constructor() { }

  public itemClicked(item: FakeUsersListInterface): void {
    this.onItemSelected.next(item);
  }

}
