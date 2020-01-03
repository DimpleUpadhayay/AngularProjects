import { Component, OnInit } from '@angular/core';
import { QuetioncardarrService } from '../quetioncardarr.service';


@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  public questioncard = [];
  constructor(private card: QuetioncardarrService) { }

  ngOnInit() {
    this.questioncard= this.card.getqestioncard();
  }

}
