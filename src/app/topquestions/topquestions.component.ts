import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuetioncardarrService } from '../quetioncardarr.service';

@Component({
  selector: 'app-topquestions',
  templateUrl: './topquestions.component.html',
  styleUrls: ['./topquestions.component.scss']
})
export class TopquestionsComponent implements OnInit {
  //Craeting array of objects for question card//
  public questioncard = [];
  
  constructor(private router: Router , private card: QuetioncardarrService) { }

  ngOnInit() {
 
    this.questioncard= this.card.getqestioncard();
  }
  goToQuestionDetails(id) {
    this.router.navigate(['/dashboard/questiondetails',id]);
  }

}

