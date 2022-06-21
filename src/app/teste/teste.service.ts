import { Injectable } from '@angular/core';

//o decorator Injectable indica que a classe TesteService pode ser injetada em outras classes
@Injectable({
  providedIn: 'root'
})
export class  TesteService{
//a injeção de dependencia é por consrtutor
  constructor() {  }

  getCursos(){
    return ["java", "JS", "Vue", "Angular", "React"]
  }
  
}
