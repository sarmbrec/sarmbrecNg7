import { switchMap } from 'rxjs/operators';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { DataService } from '../../services/data.service';
import { ExperienceInterface } from '../../interfaces/experience';
import { Label, SingleDataSet } from 'ng2-charts';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.scss']
})

export class ExperienceDetailComponent implements OnInit {

  detail$: Observable<ExperienceInterface>;

  barChartOptions: ChartOptions = {
    title: {
      display: true,
      text: '% used',
      position: 'bottom'
    },
    responsive: true,
    // legend: {
    //   display: true,
    //   labels: {
    //       fontColor: 'rgb(255, 99, 132)'
    //   }
    // },
    scales: {
      xAxes: [{
        display: true,
        gridLines: {
          display: true
        },
        ticks: {
          display: true,
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
  barChartType: ChartType = 'horizontalBar';
  barChartLegend = false;
  barChartLabels: Label[] = ['HTML 5', 'JavaScript', 'jQuery', 'SASS', 'ASP.Net'];
  barChartData: ChartDataSets[] = [
    {
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ];
  chartColors: Color[] = [
    {
      borderColor: 'rgba(0, 123, 255, 1)',
      borderWidth: 1,
      backgroundColor: 'rgba(0, 123, 255, 0.3)'
    },
  ];

  // public barChartLabels: Label[] = ['HTML', 'SASS', 'JavaScript', 'AngularJS', 'Java'];
  // public barChartData: SingleDataSet = [95, 70, 80, 60, 20];
  // public barLegend = true;
  // public barChartLegend = false;
  // public barChartType: ChartType = 'bar';


  @ViewChildren('developedFor') items: QueryList<any>;


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
