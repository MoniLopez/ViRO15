import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MenuComponent } from './menu/menu.component';
import { BusquedaModule } from './busqueda/busqueda.module';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'}, //Redirije a login
  { path: 'login', component: LoginComponent }, //Indica quien es login, no tiene routing el componente
  {
    path: 'dashboard', component: MenuComponent,
    children: [
      {
        path: 'busqueda',
        loadChildren: () => import('./busqueda/busqueda.module').then(m => m.BusquedaModule)
      }
    ],
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
