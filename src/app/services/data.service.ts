import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { ExperienceInterface } from '../interfaces/experience';
import { ExperienceMenuInterface } from '../interfaces/experience-menu';
import { KbInterface } from '../interfaces/kb';
import { FakeUsersListInterface } from '../interfaces/fake-users-list';
import { environment } from '../../environments/environment';
import { Carousel } from '../interfaces/carousel';
import { ContactInterface } from '../interfaces/contact';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
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
  ) {}

  sendEmailContactForm(contactInterface: ContactInterface): Observable<ContactInterface> {
    // TO DO, GETTING A 403 RESPONSE - NEED TO FIND EMAIL SERVICE THAT ALLOWS API ACCESS FOR FREE
    // uses https://formspree.io/ for email 
    console.log('!!!!!!!!!!!!!!!!!!   hello from send email service !!!!!!!!!!!!!!!!!!');
    return this.http.post<ContactInterface>('https://formspree.io/sarmbrec@gmail.com', contactInterface, httpOptions);
  }

  getCarouselListAsync(): Observable<Carousel[]> {
    return this.http.get<Carousel[]>(this.baseUrl + 'assets/json/carousel-tech-stack.json');
  }

  // TODO: convert to async
  getFakeUsersList() {
    return this.http.get('https://reqres.in/api/users?page=2&per_page=6&total=12');
  }

  getFakeUsersListAsync(): Observable<FakeUsersListInterface[]> {
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

  getExperiencesMenuAsync() {
    return this.http.get<ExperienceMenuInterface[]>(this.baseUrl + 'assets/json/experience.json');
  }

  getKnowledgeBaseAsync(): Observable<KbInterface[]> {
    return this.http.get<KbInterface[]>(this.baseUrl + 'assets/json/knowledge-base.json');
  }

  geKnowledgeBaseDetailAsync(id: string) {
    //console.log('geKnowledgeBaseDetailAsync id = ', id);
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
