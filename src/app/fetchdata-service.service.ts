import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class FetchdataServiceService {

  constructor(private http:HttpClient) { }
  getData(url:string){
    console.log(this.http.get(url))
    return this.http.get(url)
  }
}
