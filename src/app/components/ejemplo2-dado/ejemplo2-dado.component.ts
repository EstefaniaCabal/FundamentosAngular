import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DadoComponent } from './dado-component/dado-component.component';

@Component({
  selector: 'app-ejemplo2-dado',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DadoComponent],
  templateUrl: './ejemplo2-dado.component.html',
  styleUrls: ['./ejemplo2-dado.component.css']
})
export class Ejemplo2DadoComponent {
  title = 'ejemplo2';
  resultado: string = '';
  valor1: number = this.generarAleatorio();
  valor2: number = this.generarAleatorio();
  valor3: number = this.generarAleatorio();

  generarAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
  }

  tirarDados() {
    this.valor1 = this.generarAleatorio();
    this.valor2 = this.generarAleatorio();
    this.valor3 = this.generarAleatorio();
    if (this.valor1 === this.valor2 && this.valor2 === this.valor3) {
      this.resultado = '¡Ganaste!';
    } else {
      this.resultado = 'Perdiste. Inténtalo de nuevo.';
    }
  }
}