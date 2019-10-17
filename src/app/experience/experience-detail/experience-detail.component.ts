import { switchMap } from 'rxjs/operators';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { DataService } from '../../services/data.service';
import { ExperienceInterface } from '../../interfaces/experience';
import { Label, SingleDataSet } from 'ng2-charts';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective } from 'ng2-charts';
import { ExperienceComponent } from '../experience.component';
import { ExperienceMenuInterface } from '../../interfaces/experience-menu';


@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.scss']
})

export class ExperienceDetailComponent implements OnInit {

  //experienceMenu = [];
  experiencesMenu$: Observable<ExperienceMenuInterface[]>;
  //experiences: any;

  detail$: Observable<ExperienceInterface>;
  barChartOptions: ChartOptions = {};
  barChartLabels: Label[] = [];
  barChartData: ChartDataSets[];
  chartColors: Color[] = [];
  chartTechData = [];
  barChartType: ChartType = 'bar'; // 'horizontalBar';
  barChartLegend = false;



  @ViewChildren('developedFor') items: QueryList<any>;
  //@ViewChildren('experienceList') experiences: QueryList<ExperienceInterface>;

  constructor(
    private route: ActivatedRoute,
    private service: DataService,
  ) { }

  ngOnInit(): void {

    this.experiencesMenu$ = this.service.getExperiencesMenuAsync();

    //console.log('this.experiencesMenu$ = ', this.experiencesMenu$)

    this.experiencesMenu$.subscribe(response => {
      console.log('this.experiencesMenu$ = ', this.experiencesMenu$)
    });
    // this.experiences = this.service.getExperienceAsync().subscribe(response => {
    //   //console.log('this.experienceMenu = ', response)
    //   for (const item of response) {
    //     console.log(item.company);
    //     this.experienceMenu.push(item.company);
    //     // console.log(this.experienceMenu);
    //   }
    // });

    this.detail$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getExperienceDetailAsync(params.get('id')))
    );

    this.detail$.subscribe(response => {

      console.log('this.detail$ response  = ', response);

      // console.log('this.experienceMenu = ', this.experienceMenu)

      for (const item of response.technologies) {
        this.barChartLabels.push(item.title);
        this.chartTechData.push(item.amountUsed);
        // console.log(item);
        // console.log(this.barChartLabels);
        // console.log(this.chartTechData);
      }

      this.barChartOptions = {
        title: {
          display: false,
          //text: '% used',
          position: 'bottom'
        },
        layout: {
          padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
          }
      },
        responsive: true,
        scales: {
          xAxes: [{
            display: true,
            gridLines: {
              display: true
            },
            ticks: {
              display: true,
              fontSize: 10,
              beginAtZero: true
            }
          }],
          yAxes: [{
            display: true,
            position: 'right',
            gridLines: {
              display: true
            },
            ticks: {
              display: true,
              fontSize: 9,
              beginAtZero: true
            }
          }]
        }
        // ,
        // plugins: {
        //   datalabels: {
        //     anchor: 'end',
        //     align: 'end',
        //   }
        // }
      };
      this.barChartData = [
        {
          data: this.chartTechData
        }
      ];
      this.chartColors = [
        {
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 1,
          backgroundColor: 'rgba(0, 123, 255, 0.3)'
        },
      ];

    });


  }

}
