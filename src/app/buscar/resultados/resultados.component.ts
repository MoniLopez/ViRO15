import { Component } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  // Método para manejar la paginación
  paginacionApen(event: PageEvent) {
    //Revisar con código de visor bomberazo cuando se revisan los datos de las APIS
    const inicio = event.pageIndex * event.pageSize;
    const fin = inicio + event.pageSize;
    //this.tablaInsPaginada = this.tablaIns.slice(inicio, fin); //Revisar cuando se carguen los datos
  }

}
