import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Kb } from './knowledge-base/kb';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  serviceSecondClick(){
    return console.log('clicked');
  }

  getKnowledgeBase(){
    return this.http.get('../assets/json/knowledge-base.json');
  }

  getKnowledgeBaseAngularJS(){
    return this.http.get('../assets/json/knowledge-base-angularjs.json');
  }
  getCarouselTechStack(){
    return this.http.get('../assets/json/carousel-tech-stack.json');
  }
  
  
  getUsers(){
    return this.http.get('https://reqres.in/api/users');
  }

  // getKb(): Observable<Kb[]> {
  //   // TODO: send the message _after_ fetching the heroes
  //   this.messageService.add('KbService: fetched Kb');
  //   return of(HEROES);
  // }

  // getKbDetail(id: string) {
  //   return this.getKnowledgeBase().pipe(
  //     // (+) before `id` turns the string into a number
  //     map((heroes: Kb[]) => heroes.find(knowledgeBase => knowledgeBase.id === +id))
  //   );
  // }



}
