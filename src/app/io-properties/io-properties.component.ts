import { Component, inject, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-io-properties',
  templateUrl: './io-properties.component.html',
  styleUrls: ['./io-properties.component.css'],
  inputs: [
   //pode salvar os inputs aqui ou no @input abaixo
  ]
})
export class IoPropertiesComponent implements OnInit {

  //decorator faz com que fique visivel fora
  @Input('nome-curso') nome: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
