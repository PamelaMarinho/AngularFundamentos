import { Component, OnInit } from '@angular/core';
import { TerceiroService } from './terceiro.service';
@Component({
  selector: 'app-terceiro',
  templateUrl: './terceiro.component.html',
  styleUrls: ['./terceiro.component.css']
})
export class TerceiroComponent implements OnInit {

  terceiro : String[];

  constructor(private TerceiroService: TerceiroService) { 

    this.terceiro = this.TerceiroService.getTerceiro();
    
  }

  ngOnInit(): void {
  }




}
