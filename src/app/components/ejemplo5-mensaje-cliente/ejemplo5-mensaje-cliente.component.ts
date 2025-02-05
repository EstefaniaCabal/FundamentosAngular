import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejemplo5-mensaje-cliente',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './ejemplo5-mensaje-cliente.component.html',
  styleUrl: './ejemplo5-mensaje-cliente.component.css'
})
export class Ejemplo5MensajeClienteComponent {
  title = 'ejemplo5';

  //propiedades
  nombreCliente = '';
  emailCliente = '';
  mensajeCliente = '';
  statusCliente = '';
  municipioCliente = '';
  autorizacionCliente = false;

  enviado= false;

  formContacto = new FormGroup({
    nombre: new FormControl('',[
      Validators.required,
      Validators.minLength(10)
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    mensaje: new FormControl('',[
      Validators.required,
      Validators.maxLength(10)
    ]),
    status: new FormControl('',[
      Validators.required,
    ]),
    municipio: new FormControl('',[
      Validators.required,
    ]),
    autorizacion: new FormControl(false)
  });

  //metodo que se ejecuta al enviar el formulario
  onSubmit() {
    this.enviado = true;
    if(this.formContacto.valid){
      this.nombreCliente = this.formContacto.value.nombre!;
      this.emailCliente = this.formContacto.value.email!;
      this.mensajeCliente = this.formContacto.value.mensaje!;
      this.statusCliente = this.formContacto.value.status!;
      this.municipioCliente = this.formContacto.value.municipio!;
      this.autorizacionCliente = this.formContacto.value.autorizacion!;
    }
    
  }
}