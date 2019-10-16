import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  // someData$: Observable<SomeType[]>;
  // selectedItem: SomeType;
  //experienceDetailComponent = new ExperienceDetailComponent(this.route.snapshot.params.id, new DataService(this.route.snapshot.params.id));

  constructor(
    private route: ActivatedRoute
  ) { }


  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];

  onChartClick(event: any) {
    console.log(event);
  }

  ngOnInit() {



    // this.detail$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.service.geKnowledgeBaseDetailAsync(params.get('id')))
    // );

    // this.route.paramMap.subscribe(params => {
    //   this.products.forEach((p: Product) => {
    //     if (p.id == params.id) {
    //       this.product = p;
    //     }
    //   });
    // });

    // log observable
    // this.contactform$.subscribe(res => {
    //   console.log('res = ', res);
    //   // this.contactform$ = {
    //   //   "email" = 'string',
    //   //   message: 'string',
    //   //   name: 'string',
    //   //   _replyto: 'string'
    //   // };
    //   console.log('this.contactform$ = ', this.contactform$);
    // });


    // console.log('experienceDetailComponent = ', this.experienceDetailComponent);
    // console.log('chartLabels = ', this.chartLabels);

  }



}
