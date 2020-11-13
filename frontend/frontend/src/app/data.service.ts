import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  uri='http://localhost:4000';

  
  constructor(private http: HttpClient) { 
    
  }



  getdata(){
    return this.http.get(`${this.uri}/display/data`);
  }
  getsearchresult(search:any){
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'text/plain',
      })
  }
    return this.http.post(`${this.uri}/getsearchresults`,{search, httpOptions});
  }

  addData(LearningEvents,LearningActivities,indicator,metrics)
  {
    const data1={
      LearningEvents:LearningEvents,
      LearningActivities:{
      Name:LearningActivities,
      indicator:{
        indicatorName:indicator,
        metrics:metrics
        
      }
      }
    };
    return this.http.post(`${this.uri}/add/data`,data1);


  }
}
