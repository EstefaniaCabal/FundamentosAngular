import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejemplo1-fundamentos', // Cambio aquí
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejemplo1-fundamentos.component.html', // Asegúrate de que este archivo exista
  styleUrls: ['./ejemplo1-fundamentos.component.css'] // Asegúrate de que este archivo exista
})
export class Ejemplo1FundamentosComponent {
  title = 'fundamentos';

  nombre = 'Juanito';
  aniosServicio = 2;
  email = 'juanitogamer777@gmail.com';
  activo = true;
  alumnos = [24, 25, 26];
  contador = 0;
  numero = 5;
  desactivarBoton = true;

  productos = [
    { id: 1, descripcion: 'Gansito Marinela', precio: 15.50 },
    { id: 2, descripcion: 'Galletas Oreo', precio: 18.00 },
    { id: 3, descripcion: 'Coca Cola', precio: 12.50 }
  ];

  incrementarContador() {
    console.log('Incrementando contador');
    this.contador++;
  }

  decrementarContador() {
    console.log('Decrementando contador');
    this.contador--;
  }

  cambiarValor() {
    console.log('Cambiando estado del botón');
    this.desactivarBoton = !this.desactivarBoton;
  }

  estaActivo() {
    return this.activo ? 'Activo' : 'Inactivo';
  }

  sumarAlumnos() {
    return this.alumnos.reduce((a, b) => a + b, 0);
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}