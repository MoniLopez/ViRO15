import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'}, //Redirije a login
  { path: 'login', component: LoginComponent} //Indica quién es login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
