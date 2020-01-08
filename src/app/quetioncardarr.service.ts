import { Injectable } from '@angular/core';
import { TopquestionsComponent } from './topquestions/topquestions.component';

@Injectable({
  providedIn: 'root'
})
export class QuetioncardarrService {

questions = [{ 
  id:'1',
  votes : '1',
  heading : 'Edit 2- Migration Agent - Post to Public Forum?',
  heading2 : 'Migration Agent - Post to Public Forum 2',
  tagdescription :['Tenancy','Home Stay','HECS-HELP'],
  profile : 'Shinovi Migration',
  date : 'Asked 19 December 2019',
  views : "1",
  answere :'0',
  },
  {
    id:'2',
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
  id:'3',
 votes : '3',
  heading : 'Testing purpose',
  heading2 : 'Migration Agent - Post to Public Forum 2',
  tagdescription:['Volunteering','601 Electronic Travel Visa'],
  profile : 'Shinovi Migration',
  date : 'Asked 10 December 2019',
  views : "2",
  answere :'0',
  },
];

  getqestioncard(){
  return this.questions;
  }

  getQuestionById(qid) {
    let question = this.questions.filter((singleQuestion) => {
      if(singleQuestion.id == qid) {
        return singleQuestion;
      }
    })

    return question;
  }

  constructor() { }
  
}
