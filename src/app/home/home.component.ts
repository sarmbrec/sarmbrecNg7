import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { DataService } from '../services/data.service';
import { KbInterface } from '../interfaces/kb';
import { Observable, of } from 'rxjs';
import { ExperienceInterface } from '../interfaces/experience';
import { JumboTron } from '../interfaces/jumbotron';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  knowledgeBaseCards$: Observable<KbInterface[]>;
  experienceCards$: Observable<ExperienceInterface[]>;

  //jumboTronKB$: Observable<JumboTron>;
  jumboTronEX$: Observable<JumboTron>;


  // access other components and share data
  // title = new AppComponent().title;
  // kbstack: any = new KbListCardsComponent();

  constructor(
     private service: DataService
  ) { }

  public ngOnInit(): void {

    this.knowledgeBaseCards$ = this.service.getKnowledgeBaseAsync();

    this.experienceCards$ = this.service.getExperienceAsync();

    //this.jumboTronKB$ = this.service.getJumbotronItemAsync('steve-jobs');
    this.jumboTronEX$ = this.service.getJumbotronItemAsync('albert-einstein');

    // this.jumboTronKB$ = of({
    //   className: 'albert-einstein',
    //   leadText: 'test',
    //   mainText: 'string',
    //   smallText: 'string'
    // });

  }
}
