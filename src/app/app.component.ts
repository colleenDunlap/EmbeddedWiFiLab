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
  poke: any;
  url = 'https://pokeapi.co/api/v2/pokemon/psyduck/'
  constructor(private srv:FetchdataServiceService){
    let self = this;
    window.onload=function(){
      let btn = document.getElementById("togglebutton");
      btn.addEventListener("click", (e:Event) => self.sendNumber());

    }
  }
  sendNumber():void{
    this.srv.sendData(1)
    this.poke = this.srv.getData(this.url).subscribe(res =>{
      this.poke= res;
      console.log(this.poke)
    })
    if(this.url == 'https://pokeapi.co/api/v2/pokemon/psyduck/'){
      this.url = 'https://pokeapi.co/api/v2/pokemon/bulbasaur/'

    }
    else{
      this.url = 'https://pokeapi.co/api/v2/pokemon/psyduck/'
    }
    //this.srv.getData(this.url).subscribe(data=>console.log(data))
  }
  getPosts(): void{
    this.srv.getData(this.url).subscribe(data=>this.poke = data)
  }
  ngOnInit(){
    console.log("app initialization")
    this.getPosts()
    this.sendNumber()
  }
  
  title = 'lab8';
}
