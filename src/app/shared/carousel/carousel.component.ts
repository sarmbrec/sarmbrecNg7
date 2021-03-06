import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../environments/environment';
import { Carousel } from '../../interfaces/carousel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carousel',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]
})

export class CarouselComponent implements OnInit {
  baseUrl = environment.baseUrl;
  toggleClassActive = false;
  carouselData$: Observable<Carousel[]>;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  constructor(private service: DataService, config: NgbCarouselConfig) {
    config.interval = 0;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
   }

   ngOnInit() {
    // this.service.getCarouselTechStack().subscribe(service => {
    //    this.carouselItems = service;
    //    console.log('this.carouselItems = ', this.carouselItems)
    // });
    this.carouselData$ = this.service.getCarouselListAsync();
  }

  toggleActiveClass() {
    this.toggleClassActive = !this.toggleClassActive;
 }


}
