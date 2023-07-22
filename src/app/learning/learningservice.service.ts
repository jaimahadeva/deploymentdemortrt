import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LearningserviceService {
private baseUrl="http://localhost:8080/preptalk/v1"
  constructor(private httpclient:HttpClient) { }

  // getting the data from table 
  getDigitalQuestions():Observable<LearningserviceService[]>{
  return this.httpclient.get<LearningserviceService[]>(`${this.baseUrl}`+"/digitalquestions")
  }
  //adding a new data from table 
  addnewdigiQuestion(digiAdd:LearningserviceService):Observable<Object>{
    return this.httpclient.post(`${this.baseUrl}`+"/digitalquestions",digiAdd);
  }
}















