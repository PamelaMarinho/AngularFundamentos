import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  info: string;

  getValor(){
    return 1
  }

  url= "http://lorempixel.com.br/200/100/?1"

  constructor() {

    this.info = "String renderizada"

   }

  ngOnInit(): void {
  }

}
