import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro-component';
import { TesteModule } from './teste/teste.module';
import { TerceiroModule } from './terceiro/terceiro.module';
import { QuartoModule } from './quarto/quarto.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { IoPropertiesComponent } from './io-properties/io-properties.component';


//decorator @
//declaration/imports/providers sao metadados
@NgModule({
  //declara contem component, diretivas e pipes
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    DataBindingComponent,
    IoPropertiesComponent,
  ],
  //imports contem outros módulos que serão usados aqui ou nas declarations
  imports: [
//import { CursoComponent } from './curso/curso.component';
//import { QuartoModule } from './quarto/quarto.module';
//BrowserModule prepara app para ser rodada em um browser
  BrowserModule,
  AppRoutingModule,
  TesteModule,
  TerceiroModule,
  QuartoModule,
  FormsModule,
  ],
  //providers contem os serviços que ficarao disponiveis para todos os components declarados nesse módulo app
  providers: [],
  //bootstrap indica qual componente sera instanciado quando executar a app. Presente apenas no módulo de raiz
  bootstrap: [AppComponent]
})
export class AppModule { }
