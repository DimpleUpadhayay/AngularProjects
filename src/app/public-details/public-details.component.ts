import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute }from '@angular/router';
import { QuetioncardarrService} from '..//quetioncardarr.service';
import { Router }from '@angular/router';

@Component({
  selector: 'app-public-details',
  templateUrl: './public-details.component.html',
  styleUrls: ['./public-details.component.scss']
})
export class PublicDetailsComponent implements OnInit {
  public questioncard=[];
selectedId:string;
  constructor(private route:ActivatedRoute, private router:Router,private card:QuetioncardarrService) { }

  ngOnInit() {
    // router parameter get id on anotherpage using activated router object
    this.route.params.subscribe((param:Params)=> {
      this.selectedId = param['id'];

      
    });
    // get all data of id here
    this.questioncard = this.card.getQuestionById(this.selectedId);
    console.log(this.selectedId);
  }
goback()
{
  this.router.navigate(['/dashboard/public']);
}
  

}
