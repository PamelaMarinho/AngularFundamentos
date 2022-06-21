import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
    `
   .cor{
        background-color: aqua;
        font-weight: bold;
      }
  `
  ]
})  

export class DataBindingComponent implements OnInit {

  info: string;
  valorAtual: any;
  url= "http://lorempixel.com.br/200/100/?1";
  mouseOver: boolean = true;
 
  mouseOutOver(){
    this.mouseOver = !this.mouseOver;
  }

  getValor(){
    return 1
  }

  altera(){
    console.log('Funfou')
  }

  pressionado(evento:any){
    this.valorAtual = (<HTMLInputElement>(evento.target)).value
  }

  constructor() {

    this.info = "String renderizada"

   }

  ngOnInit(): void {
  }

}
