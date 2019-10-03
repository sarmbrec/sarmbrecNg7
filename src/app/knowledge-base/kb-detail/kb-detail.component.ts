import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from 'src/app/data.service';

//import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Kb } from '../kb';

// import { Observable } from 'rxjs';
// import { Kb } from '../kb';
// import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-kb-detail',
  templateUrl: './kb-detail.component.html',
  styleUrls: ['./kb-detail.component.scss']
})

export class KbDetailComponent implements OnInit {

  knowledgeBase: any;  
  kbDetailCategory: string = "";
  kbDetailId: string = "";
  kbDetail: any;

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
  
    this.getKbData();
    // this.data.getKnowledgeBase().subscribe(data => {
    //   this.kbDetailId = this.route.snapshot.params.id;       
    //   this.knowledgeBase = data;
    //   for (let key in this.knowledgeBase) {
    //     if(this.knowledgeBase[key].techStack.url === this.kbDetailId){
    //       console.log(this.knowledgeBase[key].techStack.url, ' === ', this.kbDetailId)
    //       console.log(this.knowledgeBase[key])
    //       return this.kbDetail = this.knowledgeBase[key];         
    //     }
    //   }
    // });

  }

  getKbData(): void {

    // + converts id to a number
    //const id = +this.route.snapshot.paramMap.get('id');
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id = ', id)

  }


}
