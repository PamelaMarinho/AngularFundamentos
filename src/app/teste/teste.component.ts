import { Component, OnInit } from '@angular/core';
import { TesteService } from './teste.service';

@Component({
  selector: 'app-teste',
  //templateUrl literal(esse comentado abaixo) só pode ser usado se tiver até 3 linhas e deve se chamar template ao inves de templateURL
  templateUrl: './teste.component.html',
/*   template: `
  <p>trabalhando dinamicamente com {{ typescript }}</p>

<ul>
    <li *ngFor="let curso of cursos">
        {{curso}}
    </li>
</ul>

  `, */
  styleUrls: ['./teste.component.css']
})


export class TesteComponent {
  

  typescript: string;
  cursos: string[];
//pode adc modificador de acesso no construtor
  constructor(private TesteService: TesteService) {

      this.typescript = "JAVA"
      this.cursos = this.TesteService.getCursos();
      
      /* for(let i = 0; i < this.cursos.length; i++){
        let curso = this.cursos[i]
      } */  
  }



}
