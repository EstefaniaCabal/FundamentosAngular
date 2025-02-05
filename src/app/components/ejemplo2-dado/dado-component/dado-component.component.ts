import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dado-component',
  standalone: true,
  imports: [],
  templateUrl: './dado-component.component.html',
  styleUrls: ['./dado-component.component.css'] // Asegúrate de que esta ruta sea correcta
})
export class DadoComponent {
  //propiedades
  @Input() valor: number = 0; // Cambiado a number para que coincida con el uso esperado
}