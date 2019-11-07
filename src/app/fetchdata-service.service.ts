import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FetchdataServiceService {

  constructor(private http:HttpClient) { }
  getData(url:string){
    //console.log(this.http.get(url))
    return this.http.get(url)
  }
  sendData (myNumber) {
    //var headers = new Headers();
    //let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })
    };
    console.log(this.http.post('http://192.168.4.2:80/','led=1', httpOptions).subscribe(data=>console.log(data)))
  }
}
