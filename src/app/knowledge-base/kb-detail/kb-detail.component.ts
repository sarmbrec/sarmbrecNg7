import { switchMap } from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { DataService } from '../../services/data.service';
import { KbInterface } from '../../interfaces/kb';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-kb-detail',
  templateUrl: './kb-detail.component.html',
  styleUrls: ['./kb-detail.component.scss']
})

export class KbDetailComponent implements OnInit {
  detail$: Observable<KbInterface>;
  kbHtml: any;

  baseUrl = environment.baseUrl;
  
  @Input() items: KbInterface; 
  
  constructor(
    private route: ActivatedRoute,
    private service: DataService,
  ) { }

  ngOnInit(): void {

    this.detail$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.geKnowledgeBaseDetailAsync(params.get('id')))
    );

  }

  getKbData(url: string) {
    this.service.getKbHtmlContent(url).subscribe(data => {
      this.kbHtml = data;
      // console.log('getKbData | url: string = ', url, ' | this.kbHtml = ', this.kbHtml);
    });
  }

}
