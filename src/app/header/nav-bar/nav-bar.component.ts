import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Observable } from 'rxjs';
import { ExperienceMenuInterface } from 'src/app/interfaces/experience-menu';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  collapsed = true;
  appTitle = new AppComponent().title;
  experiencesMenu$: Observable<ExperienceMenuInterface[]>;

  constructor(private service: DataService) { }

  ngOnInit() {

    this.experiencesMenu$ = this.service.getExperiencesMenuAsync();

  }

}
