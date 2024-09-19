import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (private router: Router){}

  entraUsuario(){
    this.router.navigate(['/inicio']); //Mueve a la página que indica el router
    console.log("Entra");
  }
}
