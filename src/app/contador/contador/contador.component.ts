import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `

    <h1>{{ titulo }}</h1>

    <h3>La base es: <strong> {{base}} </strong></h3>
    <button (click)="acumularT(+base)"> +{{base}} </button>
    <span> {{ numeroT }} </span>
    <button (click)="acumularT(-base)"> -{{base}} </button>


    `
})
export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
  
    sumar() {
      this.numero += 1;
    }
  
    restar() {
      this.numero -= 1;
    }
  
    acumular(valor: number){
      this.numero += valor;
    }
  
    //  TAREA  (en lugar de poner +/- 1 debe aparecer la base)
    base: number = 5;
    numeroT: number = 10;
  
    acumularT(valor: number){
        this.numeroT += valor;
  }
}