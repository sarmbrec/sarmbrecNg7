import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCarouselTechStack(){
    return this.http.get('../../assets/json/carousel-tech-stack.json');
  }
    
  getUsers(){
    return this.http.get('https://reqres.in/api/users?page=2&per_page=3&total=24');
  }

}
