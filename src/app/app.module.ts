import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ReactiveFormsModule } from '@angular/forms'; //Poder usar FormGroup
import { HttpClientModule } from '@angular/common/http'; //Poder usar el servicio HttpClient al consumir APIs




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
