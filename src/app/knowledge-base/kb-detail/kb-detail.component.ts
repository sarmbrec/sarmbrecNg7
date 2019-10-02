import { Component, OnInit } from '@angular/core';
// import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { Observable } from 'rxjs';
// import { Kb } from '../kb';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-kb-detail',
  templateUrl: './kb-detail.component.html',
  styleUrls: ['./kb-detail.component.scss']
})
export class KbDetailComponent implements OnInit {

  knowledgeBase: any;
  //kb$: Observable<Kb>;
  kbDetailCategory: string = "";
  kbDetailId: string = "";
  kbDetail: any;
  http: any;



  arrayObj: [];
  objectData: any;




  constructor(
    private data: DataService,
    private route: ActivatedRoute,
     private router: Router,
    //private service: KbService
  ) { }

  ngOnInit() {

    // this.kbDetailCategory = .data.getKnowledgeBase().subscribe(data => {      
    //   this.knowledgeBase = data;
    //   this.http.get('/users/'+this.kbDetailId)
    // });

  //   function findObjectByKey(array, key, value) {
  //     for (var i = 0; i < array.length; i++) {
  //         if (array[i][key] === value) {
  //             return array[i];
  //         }
  //     }
  //     return null;
  // }






  
    this.data.getKnowledgeBase().subscribe(data => {      

      //this.knowledgeBase = data.json()['results'];

        
      this.kbDetailId = this.route.snapshot.params.id;       
      this.knowledgeBase = data;

      //console.log('data = ', data)
      //console.log('KbDetailComponent | ngOnInit | knowledgeBase = ', this.knowledgeBase);
      
      //convert to array
      //let coins = [];
      for (let key in this.knowledgeBase) {
        if(this.knowledgeBase[key].techStack.url === this.kbDetailId){
          console.log(this.knowledgeBase[key].techStack.url, ' === ', this.kbDetailId)
          console.log(this.knowledgeBase[key].title)
          return this.kbDetail = this.knowledgeBase[key];
         
        }
        // console.log(data[key].title)
        // coins.push(data[key]);

      }



  });


  }

}
