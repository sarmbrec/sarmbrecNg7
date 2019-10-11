import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExperienceInterface } from './experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private httpClient: HttpClient) { }


   // async call for JSON file to represent API call for data
   getExperienceAsynch(): Observable<ExperienceInterface[]> {
    // var t = this.httpClient.get<ExperienceInterface[]>('../assets/json/experience.json');
     //console.log('!!!!!!!!!!!!!!!!!!!!!! ', t)
    return this.httpClient.get<ExperienceInterface[]>('../assets/json/experience.json');
  }
  
}
