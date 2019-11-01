import { Component, OnInit } from '@angular/core';
import {FetchdataServiceService} from './fetchdata-service.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[FetchdataServiceService]
})
export class AppComponent implements OnInit{
  
  posts;
  
  url = 'https://pokeapi.co/api/v2/pokemon/psyduck/'
  constructor(private srv:FetchdataServiceService){

  }
  sendNumber():void{
    this.srv.sendData(1)
  }
  getPosts(): void{
    this.srv.getData(this.url).subscribe(data=>console.log(data))
  }
  ngOnInit(){
    console.log("app initialization")
    this.getPosts()
    this.sendNumber()
  }
  
  title = 'lab8';
}
