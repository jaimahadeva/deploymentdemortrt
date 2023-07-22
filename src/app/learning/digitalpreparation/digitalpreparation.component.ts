import { Component, OnInit } from '@angular/core';
import { digiAddnewQ1 } from './digiAddnewQ1';
import { Router } from '@angular/router';
// import { LearningserviceService } from '../learningservice.service';
 import { LearninglocalserviceService } from '../learninglocalservice.service';

@Component({
  selector: 'app-digitalpreparation',
  templateUrl: './digitalpreparation.component.html',
  styleUrls: ['./digitalpreparation.component.css']
})


export class DigitalpreparationComponent implements OnInit {

  digiAdd:any=new digiAddnewQ1();
  digiQuestions:any=[];
  constructor( 
//  private preptalksservice:LearningserviceService,
 private preptalksservice:LearninglocalserviceService,
    private router:Router ) { }

  ngOnInit(): void {
    this.getdigiQuestions()
  }
  // service calls
  onsibmit(){
     alert("thank you "+ this.digiAdd.question+ "For the registration")
    //  this.preptalksservice.addnewdigiQuestion(this.digiAdd).subscribe(data=>{
    //   this.getdigiQuestions();
      
    // })
    
 }
  getdigiQuestions(){
    // this.preptalksservice.getDigitalQuestions().subscribe(data=>{
      this.digiQuestions=this.preptalksservice.getDigitalQuestions();
    // })
  }
}
