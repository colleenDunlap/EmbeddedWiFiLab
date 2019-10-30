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
  
  url = 'https://pokeapi.co/api/v2/pokemon/ditto/'
  constructor(private srv:FetchdataServiceService){

  }
  getPosts(): void{
    this.srv.getData(this.url).subscribe(data=>console.log(data))
  }
  ngOnInit(){
    console.log("app initialization")
    this.getPosts()
  }
  
  title = 'lab8';
}
