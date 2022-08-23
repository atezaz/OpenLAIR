import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //uri = 'http://localhost:3001/openlair';
  loggedIn: boolean;
  uri = 'https://programmingzen.org/openlair'
  //68.65.123.130    OLD
  //198.187.29.73

  constructor(private http: HttpClient) {

  }



  getdata() {
    return this.http.get(`${this.uri}/display/data`);
  }


  getsearchresult(search: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain',
      })
    }
    return this.http.post(`${this.uri}/getsearchmetrics`, { search, httpOptions });
  }

  getsearchind(search: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain',
      })
    }
    return this.http.post(`${this.uri}/getsearchindicator`, { search, httpOptions });
  }

  addData(LearningEvents, LearningActivities, indicator) {


    const data1 = {
      LearningEvents: LearningEvents,
      LearningActivities: {
        Name: LearningActivities,
        indicator: indicator,
      }
    };
    return this.http.post(`${this.uri}/add/data`, data1);


  }

  login(username, password) {
    console.log(username)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain',
      })
    }

    return this.http.post(`${this.uri}/login`, { username, password, httpOptions });
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getActivities(searchAct: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain',
      })
    }

    return this.http.post(`${this.uri}/getActivities`, { searchAct, httpOptions });
  }


  upload(file) {


    const formData = new FormData();

    formData.append('file', file, file.name);
    return this.http.post(`${this.uri}/upload`, formData);



  }




}


