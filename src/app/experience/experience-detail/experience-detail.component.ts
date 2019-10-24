import { switchMap } from 'rxjs/operators';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { ExperienceInterface } from '../../interfaces/experience';
import { Label } from 'ng2-charts';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { Color } from 'ng2-charts';
import { ExperienceMenuInterface } from '../../interfaces/experience-menu';


@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.scss']
})

export class ExperienceDetailComponent implements OnInit {
  experiencesMenu$: Observable<ExperienceMenuInterface[]>;
  detail$: Observable<ExperienceInterface>;
  barChartOptions: ChartOptions = {};
  barChartLabels: Label[] = [];
  barChartData: ChartDataSets[] = [];
  chartColors: Color[] = [];
  chartTechData = [];
  barChartType: ChartType = 'bar'; // 'horizontalBar';
  barChartLegend = false;

  @ViewChildren('supported') items: QueryList<any>;

  constructor(
    private route: ActivatedRoute,
    private service: DataService,
  ) { }

  ngOnInit(): void {
    this.experiencesMenu$ = this.service.getExperiencesMenuAsync();
    this.detail$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getExperienceDetailAsync(params.get('id')))
    );
    this.detail$.subscribe(response => {
      this.chartTechData = [];
      this.barChartLabels = [];
      for (const item of response.technologies) {
        this.barChartLabels.push(item.title);
        this.chartTechData.push(item.amountUsed);
      }
      this.barChartOptions = {
        title: {
          display: false,
          text: 'Used daily',
          position: 'right'
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
              display: false
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
      };
      this.barChartData = [
        {
          data: this.chartTechData
        }
      ];
      this.chartColors = [
        {
          borderColor: 'rgba(0, 123, 255, .3)',
          borderWidth: 1,
          backgroundColor: 'rgba(0, 123, 255, 0.1)'
        },
      ];
    });
  }
}
