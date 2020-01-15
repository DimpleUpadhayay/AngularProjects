import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuetioncardarrService } from '../quetioncardarr.service';
import {GetallquestionService } from '../getallquestion.service';
@Component({
  selector: 'app-topquestions',
  templateUrl: './topquestions.component.html',
  styleUrls: ['./topquestions.component.scss']
})
export class TopquestionsComponent implements OnInit {
  //Craeting array of objects for question card//
  public questions = [];
  data;
  constructor(private router: Router , private card: QuetioncardarrService,private getall:GetallquestionService) { }

  ngOnInit() {
//get all quetion details here 
    // this.questioncard= this.card.getqestioncard();
   // this.data = this.getall.getallquestion();
this.getallquestion();

  }
  goToQuestionDetails(id) {
    this.router.navigate(['/dashboard/questiondetails',id]);
  }
getallquestion() {
    this.getall.getallquestion()
      .subscribe((result ) =>  {
          console.log(result['data'].questions);
          this.questions=result['data'].questions;
      });
  }
  

}

