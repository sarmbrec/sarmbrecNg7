import { Component, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Observable } from 'rxjs';
import { ExperienceMenuInterface } from 'src/app/interfaces/experience-menu';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {filter} from 'rxjs/operators';

//import { NavbarComponent as navbar } from '../../../node_modules/angular-bootstrap-md/navbars/navbar.component';


//@ViewChild('navbarMain', {static : true})

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

    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe(event => {
          this.routeHasExperience = event.url.indexOf('/experience') > -1;
      });
    }


}
