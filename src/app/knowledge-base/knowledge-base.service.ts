import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { KbHtmlClass } from './kb-detail/kb-html-class';

@Injectable({
  providedIn: 'root'
})

export class KnowledgeBaseService {
  messageService: any;
  constructor(
    private httpClient: HttpClient
    
  ) { }

  getKnowledgeBase(){
    return this.httpClient.get('../assets/json/knowledge-base.json');
  }
  
  getKbHtmlContent(url: string){
    console.log('getKbHtmlContent | url = ', url)

    return this.httpClient.get("../assets/kbHtml/"+url, { responseType: 'text' as 'json' });

  }

  // getHtmlKnowledgeBaseContent(title: string): Observable<KbHtmlClass> {
  //   // TODO: send the message _after_ fetching the hero
  //   this.messageService.add(`KnowledgeBaseService: fetched getHtmlKnowledgeBaseContent title=${title}`);
  //   //return of(HEROES.find(hero => hero.id === id));    
  // }
  //   //return of(HEROES.find(hero => hero.id === id));
  // }

}
