import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  public title:string;

  constructor(){
    this.title  = 'Tendencias al momento'
  }
  ngOnInit(){
    console.log('home.component cargado');
  }
}
