import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './ejemplo4-lista-tareas.component.html',
  styleUrl: './ejemplo4-lista-tareas.component.css'
})
export class Ejemplo4ListaTareasComponent {
  title = 'ejemplo4';

  //propiedades
  listaTareas: string[];
  tarea = new FormControl();

  constructor(){
    this.listaTareas = [];
    if (typeof localStorage !== 'undefined') {
      let datos = localStorage.getItem('tareas');
      if(datos != null){
        let arreglo = JSON.parse(datos);
        if(arreglo != null){
          for(let tarea of arreglo){
            this.listaTareas.push(tarea);
          }
        }
      }
    }
  }

  agregarTarea(){
    this.listaTareas.push(this.tarea.value);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('tareas', JSON.stringify(this.listaTareas));
    }
    this.tarea.setValue('');
  }

  borrarTarea(posicion:number){
    this.listaTareas.splice(posicion, 1);
    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
      localStorage.setItem('tareas', JSON.stringify(this.listaTareas));
    }
  } 

  borrarTareas(){
    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
    }
    this.listaTareas = [];
  }
}