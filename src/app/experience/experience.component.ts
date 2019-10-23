import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ExperienceInterface } from '../interfaces/experience';
import { Observable } from 'rxjs';

import { JumboTron } from '../interfaces/jumbotron';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences$: Observable<ExperienceInterface[]>;

  jumboTronEX$: Observable<JumboTron>;

  constructor(
    private service: DataService
  ) { }

  public ngOnInit(): void {
    this.experiences$ = this.service.getExperienceAsync();
    this.jumboTronEX$ = this.service.getJumbotronItemAsync('jerry-seinfeld');
  }

}
