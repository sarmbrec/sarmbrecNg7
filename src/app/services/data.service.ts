import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { ExperienceInterface } from '../interfaces/experience';
import { KbInterface } from '../interfaces/kb';
import { FakeUsersListInterface } from '../interfaces/fake-users-list';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getCarouselTechStack() {
    return this.httpClient.get('/assets/json/carousel-tech-stack.json');
  }

  getFakeUsersList() {
    return this.httpClient.get('https://reqres.in/api/users?page=2&per_page=6&total=12');
  }

  getFakeUsersListAsync(): Observable<FakeUsersListInterface[]> {
    //return this.httpClient.get('https://reqres.in/api/users?page=2&per_page=6&total=12');
    return this.httpClient.get<FakeUsersListInterface[]>('https://reqres.in/api/users?page=2&per_page=6&total=12'); 
  }



  getExperienceAsync(): Observable<ExperienceInterface[]> {
    return this.httpClient.get<ExperienceInterface[]>('/assets/json/experience.json');    
  }
  
  getExperienceDetailAsync(id: string) {
    return this.getExperienceAsync().pipe(
      map((data: ExperienceInterface[]) => data.find(item => item.company.toLowerCase().replace(/ /g, '') === id))      
    ); 
  }

  getKnowledgeBaseAsync(): Observable<KbInterface[]> {    
    return this.httpClient.get<KbInterface[]>('/assets/json/knowledge-base.json');
  }

  geKnowledgeBaseDetailAsync(id: string) {
    console.log('geKnowledgeBaseDetailAsync id = ',id)
    return this.getKnowledgeBaseAsync().pipe(
      map((data: KbInterface[]) => data.find(item => item.title.toLowerCase().replace(/ /g, '') === id))      
    ); 
  }

  // TODO: convert to async
  getKbHtmlContent(url: string) {
    // console.log('getKbHtmlContent | url = ', url)
    return this.httpClient.get('/assets/kbHtml/' + url, {responseType: 'text' as 'json'});
  }

}
