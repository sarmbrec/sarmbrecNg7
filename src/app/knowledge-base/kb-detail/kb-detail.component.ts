import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KnowledgeBaseService } from '../knowledge-base.service';
import { KbInterface } from '../kb';

@Component({
  selector: 'app-kb-detail',
  templateUrl: './kb-detail.component.html',
  styleUrls: ['./kb-detail.component.scss']
})

export class KbDetailComponent implements OnInit {

  knowledgeBase: any;
  //kbDetailCategory: string;
  kbDetailId: string;
  kbDetail: any;
  kbHtml: any;
  //kbHtmlId: any;

  @Input() items: KbInterface; 
  
  constructor(
    private route: ActivatedRoute,
    private kbService: KnowledgeBaseService,
  ) { }

  ngOnInit(): void {
    this.kbService.getKnowledgeBase().subscribe(data => {
      this.kbDetailId = this.route.snapshot.params.id;
      this.knowledgeBase = data;
      for (const key in this.knowledgeBase) {
        if (this.knowledgeBase[key].officialdocs.url === this.kbDetailId) {
          return this.kbDetail = this.knowledgeBase[key];
        }
      }
    });
  }

  getKbData(url: string) {
    this.kbService.getKbHtmlContent(url).subscribe(data => {
      this.kbHtml = data;
      // console.log('getKbData | url: string = ', url, ' | this.kbHtml = ', this.kbHtml);
    });
  }

}
