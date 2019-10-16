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
  barChartOptions: ChartOptions = {};
  barChartLabels: Label[] = [];
  barChartData: ChartDataSets[];
  chartColors: Color[] = [];
  chartTechData = [];
  barChartType: ChartType = 'bar'; // 'horizontalBar';
  barChartLegend = false;

  @ViewChildren('developedFor') items: QueryList<any>;


  constructor(
    private route: ActivatedRoute,
    private service: DataService,
  ) { }

  ngOnInit(): void {

    this.detail$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getExperienceDetailAsync(params.get('id')))
    );

    this.detail$.subscribe(response => {

      // console.log('response  = ', response);

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
              fontSize: 8,
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
      //this.barChartLabels = ['HTML 5', 'JavaScript', 'jQuery', 'SASS', 'ASP.Net'];
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
