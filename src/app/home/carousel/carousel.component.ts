import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  carouselItems: {};
  toggleClassActive = false;
  
  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  constructor(private service: DataService, config: NgbCarouselConfig) {
    config.interval = 0;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
   }

   ngOnInit() {
    this.service.getCarouselTechStack().subscribe(service => {
       this.carouselItems = service;
       console.log('this.carouselItems = ', this.carouselItems)
    });
  }

  toggleActiveClass() {
    this.toggleClassActive = !this.toggleClassActive;
 }


}
