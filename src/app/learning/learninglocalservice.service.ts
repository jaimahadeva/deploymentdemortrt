import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LearninglocalserviceService {

  constructor() { }
  getDigitalQuestions(){
    const data=[{"id":1,"question":"Good morning","answer":"Jaishreeram Prasann\n"},{"id":8,"question":"What is server side rendering ?","answer":"Angular Universal is the technology that will allow us to render the Apploication in server side .\nBasically Angular will render the Application Only in the Browser but if we are writing the any content that content will not be visible inside the App console so we need to use some rendering method "}]
     return data
  }
  
}
