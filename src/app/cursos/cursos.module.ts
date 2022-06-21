import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    //CommonModule contem as diretivas e os modulos mais comuns que serao nos componentes declarados aqui
    //CommonModule criado somento em modulos de funcionalidades(que não é raiz)
    CommonModule
  ],
  //exports informa o que deve ser exportado
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
