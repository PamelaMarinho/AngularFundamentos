import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.css']
})
export class OutputPropertiesComponent {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild("campoInput",{static: false}) campoInput!: HTMLElement;
  
  incrementa(){
    console.log(this.campoInput)
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor})
  }

  constructor() { }


}
