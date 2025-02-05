import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo6GestorLibrosComponent } from './ejemplo6-gestor-libros.component';

describe('Ejemplo6GestorLibrosComponent', () => {
  let component: Ejemplo6GestorLibrosComponent;
  let fixture: ComponentFixture<Ejemplo6GestorLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo6GestorLibrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo6GestorLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
