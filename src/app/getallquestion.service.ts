import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetallquestionService {
public getdata;
  constructor(private http: HttpClient) { }
  getallquestion()
  {
    let data={
      category: "votes",
forum: "public",
pageNo: 1,
size: 30
    }
return this.http.post('http://52.13.118.107:3000/api/v1/auth/get-questions',data);
     
  }
}
