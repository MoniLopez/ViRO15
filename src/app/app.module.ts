import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//Permite el uso de angular material
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppRoutingModule } from './app-routing.module'; //Permite usar rutas
import { ReactiveFormsModule } from '@angular/forms'; //Poder usar FormGroup
import { HttpClientModule } from '@angular/common/http'; //Poder usar el servicio HttpClient al consumir APIs
import { LoginComponent } from './login/login.component';
//Permiten el uso de <router-outlet>, además de que en cada module se almacenan las importaciones que necesita cada componente 
import { MenuModule } from './menu/menu.module';
import { BusquedaModule } from './busqueda/busqueda.module';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    MenuModule,
    BusquedaModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
