import { Component, OnInit } from '@angular/core';
import { KnowledgeBaseComponent } from '../knowledge-base/knowledge-base.component';
import { KbListCardsComponent } from '../knowledge-base/kb-list-cards/kb-list-cards.component';
 import { DataService } from '../services/data.service';
 import { KbInterface } from '../interfaces/kb';
 import { Observable } from 'rxjs';
 import { ExperienceInterface } from '../interfaces/experience';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  knowledgeBaseCards$: Observable<KbInterface[]>;
  experienceCards$: Observable<ExperienceInterface[]>;

  // access other components and share data
  // title = new AppComponent().title;
  //kbstack: any = new KbListCardsComponent();

  
  constructor(
     private service: DataService
  ) { }

  public ngOnInit(): void {
     

    //console.log(this.kbstack)
    this.knowledgeBaseCards$ = this.service.getKnowledgeBaseAsync();
    this.experienceCards$ = this.service.getExperienceAsync();

    //this.knowledgeBase$ = this.kbstack;

  }  
  
  

}
