import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo4ListaTareasComponent } from './ejemplo4-lista-tareas.component';

describe('Ejemplo4ListaTareasComponent', () => {
  let component: Ejemplo4ListaTareasComponent;
  let fixture: ComponentFixture<Ejemplo4ListaTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo4ListaTareasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo4ListaTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
