import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo3CatalogoProductosComponent } from './ejemplo3-catalogo-productos.component';

describe('Ejemplo3CatalogoProductosComponent', () => {
  let component: Ejemplo3CatalogoProductosComponent;
  let fixture: ComponentFixture<Ejemplo3CatalogoProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo3CatalogoProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo3CatalogoProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
