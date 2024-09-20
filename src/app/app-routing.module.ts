import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'}, //Redirije a login
  { path: 'login', component: LoginComponent}, //Indica quién es login
  { path: 'busqueda', component: BusquedaComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
