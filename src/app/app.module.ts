import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro-component';
import { TesteModule } from './teste/teste.module';
import { TerceiroModule } from './terceiro/terceiro.module';
import { QuartoModule } from './quarto/quarto.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { IoPropertiesComponent } from './input-properties/io-properties.component';
import { OutputPropertiesComponent } from './output-properties/output-properties.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
//import { DiretivaNgSwitchComponent } from './diretiva-ng-switch/diretiva-ng-switch.component';
import { DiretivaNgForComponent } from './diretiva-ngfor/diretiva-ng-for.component';
import { DiretivaNgClassComponent } from './diretiva-ng-class/diretiva-ng-class.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ElementrefRendererComponent } from './elementref-renderer/elementref-renderer.component';


//decorator @
//declaration/imports/providers sao metadados
@NgModule({
  //declara contem component, diretivas e pipes
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    DataBindingComponent,
    IoPropertiesComponent,
    OutputPropertiesComponent,
    CicloComponent,
    DiretivaNgForComponent,
    DiretivaNgifComponent,
    DiretivaNgClassComponent,
    DiretivaNgstyleComponent,
    OperadorElvisComponent,
    NgContentComponent,
    ElementrefRendererComponent,
  ],
  //imports contem outros módulos que serão usados aqui ou nas declarations
  imports: [
    //import { CursoComponent } from './curso/curso.component';
    //import { QuartoModule } from './quarto/quarto.module';
    //import { DiretivaNgclassComponent } from './diretiva-ng-class/diretiva-ng-class.component';
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
