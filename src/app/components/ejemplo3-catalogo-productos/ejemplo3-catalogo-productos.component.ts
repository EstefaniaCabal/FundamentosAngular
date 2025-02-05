import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo3-catalogo-productos',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './ejemplo3-catalogo-productos.component.html',
  styleUrl: './ejemplo3-catalogo-productos.component.css'
})
export class Ejemplo3CatalogoProductosComponent
  {
  title = 'ejemplo3';

  //PROPIEDADES
  producto = {
    id: 0,
    descripcion: '',
    precio: 0
  };

  productos = [
    { id: 1, descripcion: 'Gansito marinela', precio: 15.50 },
    { id: 2, descripcion: 'Galletas oreo', precio: 18 },
    { id: 3, descripcion: 'Coca cola', precio: 12.50 },
    { id: 4, descripcion: 'Papas', precio: 15.50 },
    { id: 5, descripcion: 'Sabritas', precio: 17.50 }
  ];

  //Funcion para agregar un producto al arreglo
  agregarProducto() {
    //Validamos que el id no sea 0
    if (this.producto.id == 0) {
      alert('El id no puede ser 0');
      return;
    }
    //Verificamos que el id no sea repetido
    for (let i = 0; i < this.productos.length; i++) {
      if (this.producto.id == this.productos[i].id) {
        alert('Ya existe un producto con ese id');
        return;
      }
    }

    //Agregamos el producto al arreglo
    this.productos.push({
      id: this.producto.id,
      descripcion: this.producto.descripcion,
      precio: this.producto.precio
    });

    //Reiniciamos el objeto producto a sus valores iniciales
    this.producto.id = 0;
    this.producto.descripcion = '';
    this.producto.precio = 0;
  }

  //Funcion para seleccionar un producto existente
  seleccionarProducto(
    productoSeleccionado: {id: number, descripcion: string, precio: number}) {
    this.producto.id = productoSeleccionado.id;
    this.producto.descripcion = productoSeleccionado.descripcion;
    this.producto.precio = productoSeleccionado.precio;
  }

  //Funcion para modificar el producto
  modificarProducto() {
    for (let i = 0; i < this.productos.length; i++) {
      if (this.producto.id == this.productos[i].id) {
        this.productos[i].descripcion = this.producto.descripcion;
        this.productos[i].precio = this.producto.precio;

        //resetear el objeto producto
        this.producto.id = 0;
        this.producto.descripcion = '';
        this.producto.precio = 0;
        return;
      }
    }
    alert('No existe un producto con ese id');
  }

  //Funcion para eliminar un producto
  eliminarProducto(id: number) {
    for (let i = 0; i < this.productos.length; i++) {
      if (id == this.productos[i].id) {
        this.productos.splice(i, 1);
      }
    }
  }
}
