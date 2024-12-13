import { Component } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  selectedTomo!: string; //Guarda el valor que da radioBottom sobre el tomo
  cambioValorTomo(valor: string): void{
    this.selectedTomo = valor;
  }
} 
