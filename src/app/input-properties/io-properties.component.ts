import { Component, inject, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-io-properties',
  templateUrl: './io-properties.component.html',
  styleUrls: ['./io-properties.component.css'],
 /*  inputs: [
   pode salvar os inputs aqui ou no @input abaixo
   menos indicado que o abaixo
  ] */
})
export class IoPropertiesComponent {
  //decorator faz com que fique visivel fora
  @Input() nome: string = "";

  constructor() { }

}
