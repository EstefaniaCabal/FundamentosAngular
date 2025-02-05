import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Ejemplo1FundamentosComponent } from './components/ejemplo1-fundamentos/ejemplo1-fundamentos.component';
import { Ejemplo2DadoComponent } from './components/ejemplo2-dado/ejemplo2-dado.component';
import { Ejemplo3CatalogoProductosComponent } from './components/ejemplo3-catalogo-productos/ejemplo3-catalogo-productos.component';
import { Ejemplo4ListaTareasComponent } from './components/ejemplo4-lista-tareas/ejemplo4-lista-tareas.component';
import { Ejemplo5MensajeClienteComponent } from './components/ejemplo5-mensaje-cliente/ejemplo5-mensaje-cliente.component';
import { Ejemplo6GestorLibrosComponent } from './components/ejemplo6-gestor-libros/ejemplo6-gestor-libros.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', redirectTo: '/fundamentos', pathMatch: 'full' },
      { path: 'fundamentos', component: Ejemplo1FundamentosComponent },
      { path: 'dado', component: Ejemplo2DadoComponent },
      { path: 'catalogo', component: Ejemplo3CatalogoProductosComponent },
      { path: 'lista-tareas', component: Ejemplo4ListaTareasComponent },
      { path: 'mensaje-cliente', component: Ejemplo5MensajeClienteComponent },
      { path: 'gestor-libros', component: Ejemplo6GestorLibrosComponent },
    ])
  ]
};