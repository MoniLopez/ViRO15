import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuComponent } from './menu.component'; //Para que reconozca las importaciones hechas en este modulo (menu.module.ts)



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatToolbarModule
  ]
})
export class MenuModule { }
