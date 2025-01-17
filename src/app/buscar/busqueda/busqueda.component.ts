import { Component } from '@angular/core';
import { Router } from '@angular/router'; //Para poder usar redireccionamiento con rutas

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  constructor (private router: Router){} //Permite redireccionar
  selectedTomo!: string; //Guarda el valor que da radioBottom sobre el tomo
  cambioValorTomo(valor: string): void{
    this.selectedTomo = valor;
  }

  verResultados(){
    this.router.navigate(['dashboard/busqueda/resultado']); //Mueve a la página que indica el router
  }
} 
