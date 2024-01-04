import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    // importamos el modulo para usar el ngclass
    CommonModule,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  public project:boolean = false;
  public menu:boolean = false;

  //creamos una funcion que se encargue de ocultar el menu por medio de las clases de css
  public hideMenu(){
    this.menu = !this.menu;
  }

}
