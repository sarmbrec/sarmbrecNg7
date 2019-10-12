import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { DataService } from '../../services/data.service';
import { ExperienceInterface } from '../../interfaces/experience';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.scss']
})

export class ExperienceDetailComponent implements OnInit {
  
  detail$: Observable<ExperienceInterface>;
  // id = this.route.snapshot.params.id;
  
  constructor(
    private route: ActivatedRoute,
    private service: DataService,
  ) { }

  ngOnInit(): void {

     this.detail$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getExperienceDetailAsync(params.get('id')))
    );
  }

}
