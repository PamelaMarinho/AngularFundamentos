import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
  

  typescript: string;
  cursos: string[] = ["java", "JS", "Vue"]

  constructor() {
      this.typescript = "JAVA"

      for(let i = 0; i < this.cursos.length; i++){
        let curso = this.cursos[i]
      }
  }

  ngOnInit(): void {
  }

}
