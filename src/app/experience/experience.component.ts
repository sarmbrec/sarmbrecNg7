import { Component, OnInit } from '@angular/core';
import { ExperienceService } from './experience.service';
import { ExperienceInterface } from './experience';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experienceData$: Observable<ExperienceInterface[]>;
  
  constructor(
    private expData: ExperienceService
  ) { }

  public ngOnInit(): void {
    this.experienceData$ = this.expData.getExperienceAsynch();
  }  

}
