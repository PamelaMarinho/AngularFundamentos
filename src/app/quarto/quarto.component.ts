import { Component, OnInit } from '@angular/core';
import { QuartoService } from './quarto.service';

@Component({
  selector: 'app-quarto',
  templateUrl: './quarto.component.html',
  styleUrls: ['./quarto.component.css']
})
export class QuartoComponent{

  quarto: string;

  constructor(private QuartoService: QuartoService)  {

    this.quarto = this.QuartoService.getQuarto();
   }


}
