import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './busqueda.component';

const routes: Routes = [
  { path:'', component: BusquedaComponent} //El contenido de la página
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class BusquedaRoutingModule { }
