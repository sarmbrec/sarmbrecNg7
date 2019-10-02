import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getKnowledgeBase(){
    return this.http.get('../assets/json/knowledge-base.json');
  }
// getKBase(): Observable<any>{
//     return this.http.get('../assets/json/knowledge-base.json').map(res => res.json());
//   }

  getKB(): Observable<any> {
    const api = '../assets/json/kb.json';
    return this.http.get(api);    
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
