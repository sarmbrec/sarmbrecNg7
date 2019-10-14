import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { ExperienceInterface } from '../interfaces/experience';
import { KbInterface } from '../interfaces/kb';
import { FakeUsersListInterface } from '../interfaces/fake-users-list';
import { environment } from '../../environments/environment';
import { Carousel } from '../interfaces/carousel';
import { ContactInterface } from '../interfaces/contact';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        //'Authorization': 'my-auth-token'
      })
    };

@Injectable({
  providedIn: 'root'
})

export class DataService {

  baseUrl = environment.baseUrl;
  handleError: any;

  
  constructor(
    private http: HttpClient
  ) { 

    
  
    
  }


  /** POST: add a new hero to the database */
sendEmailContactForm (contactInterface: ContactInterface): Observable<ContactInterface> {
  
  console.log('!!!!!!!!!!!!!!!!!!   hello from send email service !!!!!!!!!!!!!!!!!!')
  
  return this.http.post<ContactInterface>('https://formspree.io/sarmbrec@gmail.com', contactInterface, httpOptions)
    .pipe(
      catchError(this.handleError('contactInterface', contactInterface))
    );
}



  getCarouselTechStack() {
    return this.http.get(this.baseUrl + 'assets/json/carousel-tech-stack.json');
  }

  getCarouselListAsync(): Observable<Carousel[]> {
    return this.http.get<Carousel[]>(this.baseUrl + 'assets/json/carousel-tech-stack.json'); 
  }

  getFakeUsersList() {
    return this.http.get('https://reqres.in/api/users?page=2&per_page=6&total=12');
  }

  getFakeUsersListAsync(): Observable<FakeUsersListInterface[]> {
    //return this.http.get('https://reqres.in/api/users?page=2&per_page=6&total=12');
    return this.http.get<FakeUsersListInterface[]>('https://reqres.in/api/users?page=2&per_page=6&total=12'); 
  }



  getExperienceAsync(): Observable<ExperienceInterface[]> {
    return this.http.get<ExperienceInterface[]>(this.baseUrl + 'assets/json/experience.json');    
  }
  
  getExperienceDetailAsync(id: string) {
    return this.getExperienceAsync().pipe(
      map((data: ExperienceInterface[]) => data.find(item => item.company.toLowerCase().replace(/ /g, '') === id))      
    ); 
  }

  getKnowledgeBaseAsync(): Observable<KbInterface[]> {    
    return this.http.get<KbInterface[]>(this.baseUrl + 'assets/json/knowledge-base.json');
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
    return this.http.get(this.baseUrl + 'assets/kbHtml/' + url, {responseType: 'text' as 'json'});
  }

}
