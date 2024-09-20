import { Component } from '@angular/core';
import { Router } from '@angular/router'; //Para poder usar redireccionamiento con rutas
import { BusquedaService } from '../service/busqueda.service'; //Llama al servicio de busqueda
import { FormBuilder, Validators } from '@angular/forms'; //Validar formulario

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (private router: Router, //Permite redireccionar
    private serviceBusqueda : BusquedaService, //Para usar los metodos que tiene el servicio
    private builder: FormBuilder, //Poder usar builder en la validación del formulario
  ){}

  oficinas: any; //Guarda las oficinas recibidas de la API
  infoUs: any; //Guarda la información del usuario traída desde la API de G-Usit

  //Valida los campos del formulario login
  loginForm = this.builder.group({
    verssion: this.builder.control('1'),
    sistema: this.builder.control('VIRO'),
    usuario: this.builder.control('', Validators.required),
    passwd: this.builder.control('', Validators.required)
  });

  entraUsuario(){ //Botón Ingresar
    if(this.loginForm.valid){ //Verificar que el formulario es válido
      //Consumo de API G-USIT para logueo
      this.serviceBusqueda.login(this.loginForm.value).subscribe(data =>{
        this.infoUs = data;
        console.log("gusit:"+this.infoUs);
      })
      const datosUs ={
        usuario : this.loginForm.get('usuario')?.value,
        pass : this.loginForm.get('passwd')?.value
      }
      this.serviceBusqueda.verOficinas(datosUs).subscribe(data => {
        this.oficinas = data;
        console.log(this.oficinas);
      })
      
    }

    //Uso de API login para obtener oficinas
    this.router.navigate(['/busqueda']); //Mueve a la página que indica el router
  }
}
