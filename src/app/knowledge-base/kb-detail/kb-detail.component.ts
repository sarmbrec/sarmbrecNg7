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
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) { }

  ngOnInit(): void {
  
      const id = this.route.snapshot.paramMap.get('id');
    console.log('id = ', id)

    //stephen pick up here and pass id into service try to use find to return item from array

    //this.getKbData();
    this.dataService.getKnowledgeBase().subscribe(data => {
      this.kbDetailId = this.route.snapshot.params.id;       
      this.knowledgeBase = data;
      for (let key in this.knowledgeBase) {
        if(this.knowledgeBase[key].officialdocs.url === this.kbDetailId){
          console.log(this.knowledgeBase[key].officialdocs.url, ' === ', this.kbDetailId)
          console.log(this.knowledgeBase[key])
          return this.kbDetail = this.knowledgeBase[key];         
        }
      }
    });

  }

  // getKbData(): void {

  //   // + converts id to a number
  //   //const id = +this.route.snapshot.paramMap.get('id');
  //   const id = this.route.snapshot.paramMap.get('id');
  //   console.log('id = ', id)
  //   this.dataService.getKB(id).subscribe
  // }


}

// use this for detail dynamic content to load html?????
// import { Component, Input } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-root',
//   template: `
//             <div [innerHtml]="myTemplate">
//             </div>
//           `,
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   private myTemplate: any = '';
//   constructor(http: HttpClient) {
//     http.get('/service-path', {responseType: 'text'}).subscribe(data => this.myTemplate = data);
//   }
// }
