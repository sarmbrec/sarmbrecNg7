import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ExperienceInterface } from '../interfaces/experience';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences$: Observable<ExperienceInterface[]>;

  constructor(
    private dataService: DataService
  ) { }

  public ngOnInit(): void {
    this.experiences$ = this.dataService.getExperienceAsync();
  }  

}
