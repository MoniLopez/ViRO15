import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  constructor(private http: HttpClient) { }
  loginGusit = 'https://tramitesenlinea.ircep.gob.mx/ws/generalLogin/api/sparkle/initSesion/'
  oficinasPermitidas = 'http://192.168.12.9:1080/ViroApi/Login/login'

  //API para login con G-Usit
  login(usuario: any){
    return this.http.post(this.loginGusit, usuario);
  }
  //API para obtener las oficinas que puede ver el usuario
  verOficinas (datosUsuario: any){
    return this.http.post(this.oficinasPermitidas, datosUsuario);
  }
}
