import { RouterModule } from '@angular/router';
import { NavComponent } from './../sections/nav/nav.component';
import { Component } from '@angular/core';
import { SeparatorComponent } from '../sections/separator/separator.component';
import { HeaderComponent } from '../sections/header/header.component';
import { AboutComponent } from '../sections/about/about.component';
import { TecnologyComponent } from '../sections/tecnology/tecnology.component';
import { ContactComponent } from '../sections/contact/contact.component';
import { FooterComponent } from '../sections/footer/footer.component';
 // Importar el componente NavComponent
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NavComponent,
    SeparatorComponent,
    HeaderComponent,
    AboutComponent,
    TecnologyComponent,
    ContactComponent,
    FooterComponent,
    RouterModule], // Corregir el uso de la propiedad imports
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export default class DashboardComponent {

}
