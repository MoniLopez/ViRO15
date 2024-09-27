import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MenuComponent } from './menu/menu.component';
import { BusquedaModule } from './busqueda/busqueda.module';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'}, //Manda la raiz al login
  { path: 'login', component: LoginComponent }, //Define la ruta /login e indica que es LoginComponent
  {
    path: 'dashboard', component: MenuComponent,
    children: [
      {
        path: 'busqueda',
        loadChildren: () => import('./busqueda/busqueda.module').then(m => m.BusquedaModule)
      }
    ],
  },
  { path:'**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
