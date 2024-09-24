import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaRoutingModule } from './busqueda-routing.module';
import { BusquedaComponent } from './busqueda.component'; //Para que reconozca las importaciones hechas en este modulo (busqueda.module.ts)



@NgModule({
  declarations: [
    BusquedaComponent 
  ],
  imports: [
    CommonModule,
    BusquedaRoutingModule
  ]
})
export class BusquedaModule { }
