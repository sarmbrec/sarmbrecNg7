import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { KbInterface } from './kb';

@Injectable({
  providedIn: 'root'
})

export class KnowledgeBaseService {
  //messageService: any;
  constructor(
    private httpClient: HttpClient
  ) { }

  // TODO:  remove if not used - used on kb detail need to use observable instead....
  getKnowledgeBase() {
    return this.httpClient.get('../assets/json/knowledge-base.json');
  }

  // async call for JSON file to represent API call for data
  getKnowledgeBaseAsynch(): Observable<KbInterface[]> {    
    return this.httpClient.get<KbInterface[]>('../assets/json/knowledge-base.json');
  }

  // TODO: convert to async
  getKbHtmlContent(url: string) {
    // console.log('getKbHtmlContent | url = ', url)
    return this.httpClient.get('../assets/kbHtml/' + url, {responseType: 'text' as 'json'});
  }


}
