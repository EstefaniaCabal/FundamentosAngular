import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Libro {
  id: number;
  titulo: string;
  autor: string;
}

@Component({
  selector: 'app-ejemplo6-gestor-libros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ejemplo6-gestor-libros.component.html',
  styleUrls: ['./ejemplo6-gestor-libros.component.css']
})
export class Ejemplo6GestorLibrosComponent {
  libros: Libro[] = this.cargarLibros(); // para cargar los libros guardados en LocalStorage
  nuevoLibro: Libro = { id: 0, titulo: '', autor: '' };
  editando = false;
  
  // Métodos

  agregarLibro() {
    if (this.nuevoLibro.titulo && this.nuevoLibro.autor) {
      if (this.editando) {
        this.libros = this.libros.map((libro: Libro) =>
          libro.id === this.nuevoLibro.id ? { ...this.nuevoLibro } : libro
        );
        this.editando = false;
      } else {
        this.nuevoLibro.id = this.libros.length ? this.libros[this.libros.length - 1].id + 1 : 1;
        this.libros.push({ ...this.nuevoLibro });
      }
      this.guardarLibros(); // Guarda en LocalStorage
      this.nuevoLibro = { id: 0, titulo: '', autor: '' };
    }
  }

  editarLibro(libro: Libro) {
    this.nuevoLibro = { ...libro };
    this.editando = true;
  }

  eliminarLibro(id: number) {
    this.libros = this.libros.filter((libro: Libro) => libro.id !== id);
    this.guardarLibros(); // Guarda los cambios en LocalStorage
  }

  guardarLibros() {
    localStorage.setItem('libros', JSON.stringify(this.libros)); // Guarda en el navegador
  }

  cargarLibros(): Libro[] {
    if (typeof localStorage !== 'undefined') {
      return JSON.parse(localStorage.getItem('libros') || '[]');
    }
    return []; 
  }
  }
