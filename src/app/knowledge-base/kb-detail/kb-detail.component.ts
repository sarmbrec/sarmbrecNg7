import { Component, OnInit } from '@angular/core';
//import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//import { switchMap } from 'rxjs/operators';
//import { Observable } from 'rxjs';
//import { Kb } from '../kb';

@Component({
  selector: 'app-kb-detail',
  templateUrl: './kb-detail.component.html',
  styleUrls: ['./kb-detail.component.scss']
})
export class KbDetailComponent implements OnInit {

  // kb$: Observable<Kb>;
  showTab: string = 'getting-started';

  constructor(
    //private route: ActivatedRoute,
    //private router: Router,
    // private service: KbService
  ) { }

  ngOnInit() {
    // this.hero$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.service.getHero(params.get('id')))
    // );
  }

}
