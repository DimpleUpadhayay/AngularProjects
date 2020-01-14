import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QuetioncardarrService } from '../quetioncardarr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.scss']
})
export class QuestionDetailsComponent implements OnInit {
  public questioncard = [];
  selectedId:string;
  constructor(private route: ActivatedRoute, private card: QuetioncardarrService, private router: Router) { }

  ngOnInit() {
    // router parameter get selected id data on anotherpage
    this.route.params.subscribe((param:Params)=> {
      this.selectedId = param['id'];

      
    });
    // get all data of id here
    this.questioncard = this.card.getQuestionById(this.selectedId);
    console.log(this.selectedId);
   
    
  }
  goback()
  {
    this.router.navigate(['/dashboard/topquestions']);
  }

}
