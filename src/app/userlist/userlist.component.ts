import { Component, OnInit } from '@angular/core';
import { Router,} from '@angular/router'
import { QuetioncardarrService } from '../quetioncardarr.service';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
public questioncard= [];
  constructor(private router:Router, private card:QuetioncardarrService) { }

  ngOnInit() {
    this.questioncard= this.card.getqestioncard();
  }
  goToUserDetailsList(id){
  this.router.navigate(['/dashboard/userdetailslist',id]);
}
}
