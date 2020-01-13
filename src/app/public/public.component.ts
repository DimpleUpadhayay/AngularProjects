import { Component, OnInit } from '@angular/core';
import { QuetioncardarrService } from '../quetioncardarr.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  public questioncard = [];
  constructor(private card: QuetioncardarrService, private router:Router){ }

  ngOnInit() {
    //getting array from service
    this.questioncard= this.card.getqestioncard();
  }


goToQuestionDetails(id) {
  this.router.navigate(['/dashboard/publicdetails',id]);
}
}