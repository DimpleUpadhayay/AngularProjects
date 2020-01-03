import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QuetioncardarrService } from '../quetioncardarr.service';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.scss']
})
export class QuestionDetailsComponent implements OnInit {
  public questioncard = [];
  selectedId:string;
  constructor(private route: ActivatedRoute, private card: QuetioncardarrService) { }

  ngOnInit() {
    this.route.params.subscribe((param:Params)=> {
      this.selectedId = param['id'];

      
    });
    this.questioncard = this.card.getqestioncard();
    console.log(this.selectedId);
   
    
  }

}
