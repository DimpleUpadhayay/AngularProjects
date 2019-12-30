import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topquestions',
  templateUrl: './topquestions.component.html',
  styleUrls: ['./topquestions.component.scss']
})
export class TopquestionsComponent implements OnInit {
  //Craeting array of objects for question card//
  questionCard=[{ 
    votes : '1',
    heading : 'Edit 2- Migration Agent - Post to Public Forum',
    heading2 : 'Migration Agent - Post to Public Forum 2',
    tagdescription :['Tenancy','Home Stay','HECS-HELP'],
    profile : 'Shinovi Migration',
    date : 'Asked 19 December 2019',
    views : "1",
    answere :'0',
    },
    {
      votes : '6',
    heading : 'Angular',
    heading2 : 'Migration Agent - Post to Public Forum 2',
    tagdescription:['Tenancy','Home Stay'],
    profile : 'Shinovi Migration',
    date : 'Asked 19 Aprill 2019',
    views : "5",
    answere :'8',
  },
  {
   votes : '3',
    heading : 'Testing purpose',
    heading2 : 'Migration Agent - Post to Public Forum 2',
    tagdescription:['Volunteering','601 Electronic Travel Visa'],
    profile : 'Shinovi Migration',
    date : 'Asked 10 December 2019',
    views : "2",
    answere :'0',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}

