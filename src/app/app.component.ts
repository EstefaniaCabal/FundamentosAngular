import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  // 📌 Importa RouterModule para que funcione el menú
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { }
