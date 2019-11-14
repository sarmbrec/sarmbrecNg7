import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Carousel } from '../../interfaces/carousel';
import { environment } from 'src/environments/environment';

import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

import { KbInterface } from 'src/app/interfaces/kb';
import { ActiveKBItem } from 'src/app/interfaces/active-kb-item';

import { switchMap } from 'rxjs/operators';
import { ParamMap } from '@angular/router';

import { Label } from 'ng2-charts';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { Color } from 'ng2-charts';



@Component({
  selector: 'app-engagenator',
  templateUrl: './engagenator.component.html',
  styleUrls: ['./engagenator.component.scss']
})

export class EngagenatorComponent implements OnInit {

  baseUrl = environment.baseUrl;
  engagenatorData$: Observable<KbInterface[]>;
  activeItem: any;
  kbData$: Observable<KbInterface[]>;

  
  // detail$: Observable<KbInterface>;

  // carouselData$: Observable<Carousel[]>;



  // chartOptions: ChartOptions = {};
  // chartLabels: Label[] = [];
  // chartData: ChartDataSets[] = [];
  // chartColors: Color[] = [];
  // chartTechData = [];
  // chartTypeBar: ChartType = 'bar'; // 'horizontalBar';
  // chartTypeRadar: ChartType = 'radar'; // 'horizontalBar';
  // chartTypeLine: ChartType = 'line'; // 'horizontalBar';
  // chartLegend = false;



  // @Input() items: Carousel;
  // @Output() ItemSelected = new EventEmitter<Carousel>();

  constructor(
    private service: DataService
  ) { }

  ngOnInit(): void {

    // this.carouselData$ = this.service.getCarouselListAsync();

    this.engagenatorData$ = this.service.getKnowledgeBaseAsync();

    this.engagenatorData$.subscribe(res => {
      // console.log('res[0]] = ', res[0]);
      this.activeItem = res[0];
      console.log('this.activeItem = ', this.activeItem);
    });


    // this.kbData$ = this.service.getKnowledgeBaseAsync();


    // this.kbChartData$.subscribe(response => {
    //   this.chartTechData = [];
    //   this.chartLabels = [];
    //   for (const item of response) {
    //     if (item.knowledgeLevel && item.title) {
    //       this.chartLabels.push(item.title);
    //       this.chartTechData.push(parseFloat(item.knowledgeLevel));
    //     }
    //   }
    //   this.chartOptions = {
    //     title: {
    //       display: false,
    //       text: 'Knowledge Base',
    //       fontColor: 'rgba(255,255,255,.3)',
    //       fontSize: 11,
    //       position: 'top'
    //     },
    //     layout: {
    //       padding: {
    //           left: 5,
    //           right: 5,
    //           top: 5,
    //           bottom: 5
    //       }
    //   },
    //     responsive: true,
    //     scales: {
    //       xAxes: [{
    //         display: true,
    //         gridLines: {
    //           display: false,
    //           color: 'rgba(255,255,255,.1)'
    //         },
    //         ticks: {
    //           display: true,
    //           fontColor: 'rgba(255,255,255,.3)',
    //           fontSize: 8.5,
    //           beginAtZero: true
    //         }
    //       }],
    //       yAxes: [{
    //         display: false,
    //         position: 'right',
    //         gridLines: {
    //           display: false,
    //           color: 'rgba(255,255,255,.1)'
    //         },
    //         ticks: {
    //           display: true,
    //           fontColor: 'rgba(255,255,255,.3)',
    //           fontSize: 9,
    //           beginAtZero: true
    //         }
    //       }]
    //     }
    //   };
    //   this.chartData = [
    //     {
    //       data: this.chartTechData
    //     }
    //   ];
    //   this.chartColors = [
    //     {
    //       borderColor: 'rgba(255, 255, 255, 0.2)',
    //       borderWidth: 1,
    //       backgroundColor: 'rgba(255, 255, 255, 0.1)'
    //       // backgroundColor: 'rgba(0, 123, 255, 0.7)'
    //     },
    //   ];
    // });

  }

  // public itemClicked(item: Carousel): void {
  //   this.ItemSelected.next(item);
  // }

}
