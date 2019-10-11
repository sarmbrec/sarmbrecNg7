import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ExperienceInterface } from '../experience';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent {
  
  @Input() items: ExperienceInterface;
  @Output() onItemSelected = new EventEmitter<ExperienceInterface>();

  constructor() { }

  // public itemClicked(item: ExperienceInterface): void {
  //   this.onItemSelected.next(item);
  // }

}
