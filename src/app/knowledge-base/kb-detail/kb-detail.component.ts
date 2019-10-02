import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Kb } from '../kb';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-kb-detail',
  templateUrl: './kb-detail.component.html',
  styleUrls: ['./kb-detail.component.scss']
})
export class KbDetailComponent implements OnInit {

  //kb$: Observable<Kb>;
  kbDetailCategory: string = "";
  kbDetailId: string = "";
  knowledgeBase: {};


  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router,
    //private service: KbService
  ) { }

  ngOnInit() {

  //   this.data.getKnowledgeBase().subscribe(data => {      
  //     this.knowledgeBase = data;
  //     console.log('KbDetailComponent | ngOnInit | knowledgeBase = ', this.knowledgeBase)
      
  //     this.kbDetailId = this.route.snapshot.params.id;
  //     this.kbDetailCategory = data[0].find(hero => hero.id === +id)
  //  });


  //  this.route.paramMap.subscribe(params => {

      

  //     // this.products.forEach((p: Product) => {
  //     //   if (p.id == params.id) {
  //     //     this.product = p;
  //     //   }
  //     // });
  //   });

    
  //  this.route.paramMap.subscribe(params => {
  //   this.knowledgeBase.forEach((p: this.knowledgeBase: any) => {
  //     if (p.id == params.id) {
  //       this.kbDetailId = p;
  //     }
  //   });
  //});

    // this.hero$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.service.getHero(params.get('id')))
    // );
  }

}
