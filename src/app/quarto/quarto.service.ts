import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuartoService {

  constructor() { }

  getQuarto(){
    return "olá quarto service"
  }

}
