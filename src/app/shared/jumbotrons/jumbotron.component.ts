import { Component, Input } from '@angular/core';
import { JumboTron } from '../../interfaces/jumbotron';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})

export class JumbotronComponent {
  @Input() items: JumboTron;
  constructor() { }
}
