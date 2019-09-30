import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carousel-home-page',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './carousel-home-page.component.html',
  styleUrls: ['./carousel-home-page.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class CarouselHomePageComponent implements OnInit {

  //define the carousel items object
  carouselItems: {};
  
  
  //define the toogle property
  toggleClassActive : boolean = false;

  //images = [];
  
  //paused = false;
  //unpauseOnArrow = false;
  //pauseOnIndicator = false;
  //pauseOnHover = true;

  //images = [1, 2, 3, 4, 5, 6, 7].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  
  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  // togglePaused() {
  //   if (this.paused) {
  //     this.carousel.cycle();
  //   } else {
  //     this.carousel.pause();
  //   }
  //   this.paused = !this.paused;
  // }

  // onSlide(slideEvent: NgbSlideEvent) {
  //   if (this.unpauseOnArrow && slideEvent.paused &&
  //     (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
  //     this.togglePaused();
  //   }
  //   if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
  //     this.togglePaused();
  //   }
  // }

  
  
  // pass in our data service that holds our api calls
  // pass in our bootstrap carousel config from ng bootstrap
  constructor(private data: DataService, config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 0;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
   }

  // on component load
  ngOnInit() {
    // call our service to get results back from api
    this.data.getCarouselTechStack().subscribe(data => {      
       this.carouselItems = data;
      //  console.log('ngOnInit | carouselItems = ', this.carouselItems)
    });
  }



  //define your method
  toggleActiveClass(){

    //this.status = !this.status;      
    //if you just want to toggle the class; change toggle variable.
    this.toggleClassActive = !this.toggleClassActive;

    console.log('toggleActiveClass() | toggleClassActive = ', this.toggleClassActive)
    //console.log('toggleActiveClass() | status = ', this.status)
 }

//  toggleActiveClass(event: any, class: string) {
//   const hasClass = event.target.classList.contains(class);

//   if(hasClass) {
//     this.renderer.removeClass(event.target, class);
//   } else {
//     this.renderer.addClass(event.target, class);
//   }
// }


}
