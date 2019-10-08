import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-home-page',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './carousel-home-page.component.html',
  styleUrls: ['./carousel-home-page.component.scss'],
  providers: [NgbCarouselConfig]
})

export class CarouselHomePageComponent implements OnInit {
  carouselItems: {};
  toggleClassActive = false;
  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  constructor(private data: DataService, config: NgbCarouselConfig) {
    config.interval = 0;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
   }

   ngOnInit() {
    this.data.getCarouselTechStack().subscribe(data => {
       this.carouselItems = data;
    });
  }

  toggleActiveClass() {
    this.toggleClassActive = !this.toggleClassActive;
 }

}
