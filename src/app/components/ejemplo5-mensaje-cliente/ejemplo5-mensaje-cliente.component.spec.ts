import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo5MensajeClienteComponent } from './ejemplo5-mensaje-cliente.component';

describe('Ejemplo5MensajeClienteComponent', () => {
  let component: Ejemplo5MensajeClienteComponent;
  let fixture: ComponentFixture<Ejemplo5MensajeClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo5MensajeClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo5MensajeClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
