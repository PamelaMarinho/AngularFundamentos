import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro-component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';
import { TesteModule } from './teste/teste.module';

//decorator @
//declaration/imports/providers sao metadados
@NgModule({
  //declara contem component, diretivas e pipes
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  //imports contem outros módulos que serão usados aqui ou nas declarations
  imports: [
//import { CursoComponent } from './curso/curso.component';
//BrowserModule prepara app para ser rodada em um browser
  BrowserModule,
  AppRoutingModule,
  CursosModule ,
  TesteModule
  ],
  //providers contem os serviços que ficarao disponiveis para todos os components declarados nesse módulo app
  providers: [],
  //bootstrap indica qual componente sera instanciado quando executar a app. Presente apenas no módulo de raiz
  bootstrap: [AppComponent]
})
export class AppModule { }
