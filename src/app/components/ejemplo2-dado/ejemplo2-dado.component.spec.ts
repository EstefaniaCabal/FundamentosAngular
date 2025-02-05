import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo2DadoComponent } from './ejemplo2-dado.component';

describe('Ejemplo2DadoComponent', () => {
  let component: Ejemplo2DadoComponent;
  let fixture: ComponentFixture<Ejemplo2DadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo2DadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo2DadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
