import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Observable } from 'rxjs';
import { ExperienceMenuInterface } from 'src/app/interfaces/experience-menu';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  collapsed = true;
  appTitle = new AppComponent().title;
  experiencesMenu$: Observable<ExperienceMenuInterface[]>;
  urlPath: string;
  routeHasExperience = false;

  constructor(private service: DataService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.experiencesMenu$ = this.service.getExperiencesMenuAsync();

    // this.router.events.subscribe( (url: any) => console.log(url) );
    // console.log('this.router.url = ', this.router.url);  // to print only path eg:"/login"
    // console.log('this.activatedRoute.snapshot.url[0].path = ', this.activatedRoute.snapshot.url[0].path);
    // console.log(this.route.url); //  /routename


    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe(event => {
          this.urlPath = event.url;

          console.log('this.urlPath = ', this.urlPath);
          this.routeHasExperience = this.urlPath.indexOf('/experience') > -1;

          console.log('this.routeHasExperience = ', this.routeHasExperience);
      });
    }


}
