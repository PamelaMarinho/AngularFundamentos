import { Component, OnInit } from '@angular/core';
import { QuartoService } from './quarto.service';

@Component({
  selector: 'app-quarto',
  templateUrl: './quarto.component.html',
  styleUrls: ['./quarto.component.css']
})
export class QuartoComponent implements OnInit {

  quarto: string;

  constructor(private QuartoService: QuartoService)  {

    this.quarto = this.QuartoService.getQuarto();
   }

  ngOnInit(): void {
  }

}
