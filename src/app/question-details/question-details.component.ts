import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.scss']
})
export class QuestionDetailsComponent implements OnInit {

  selectedId:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((param:Params)=> {
      this.selectedId = param['id'];

      
    });

    console.log(this.selectedId);
    
  }

}
