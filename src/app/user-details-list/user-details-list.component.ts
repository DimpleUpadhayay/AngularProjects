import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ ActivatedRoute , Params } from '@angular/router';
import { QuetioncardarrService } from '../quetioncardarr.service';



@Component({
  selector: 'app-user-details-list',
  templateUrl: './user-details-list.component.html',
  styleUrls: ['./user-details-list.component.scss']
})
export class UserDetailsListComponent implements OnInit {
public questioncard=[];
selectedId:string;
  constructor(private router:Router,private route:ActivatedRoute,private card:QuetioncardarrService) { }

  ngOnInit() {
    // router parameter get selected id data on anotherpage
    this.route.params.subscribe((param:Params)=> {
      this.selectedId = param['id'];

      
    });
    // get all data of id here
    this.questioncard = this.card.getQuestionById(this.selectedId);
    console.log(this.selectedId);
   
    
  }
  }


