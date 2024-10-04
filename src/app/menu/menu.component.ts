import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  // Función para abrir la barra de navegación
  openNav() {
    const sidenav = document.getElementById('sideNav');
    const main = document.getElementById('main');
    
    if (sidenav && main) {
      sidenav.style.width = '250px';
      main.style.marginLeft = '250px';
    }
  }

  // Función para cerrar la barra de navegación
  closeNav() {
    const sidenav = document.getElementById('sideNav');
    const main = document.getElementById('main');
    
    if (sidenav && main) {
      sidenav.style.width = '0';
      main.style.marginLeft = '0';
    }
  }

}

