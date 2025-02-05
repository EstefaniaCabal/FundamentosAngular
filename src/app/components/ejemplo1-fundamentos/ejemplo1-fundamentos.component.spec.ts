import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo1FundamentosComponent } from './ejemplo1-fundamentos.component';

describe('Ejemplo1FundamentosComponent', () => {
  let component: Ejemplo1FundamentosComponent;
  let fixture: ComponentFixture<Ejemplo1FundamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo1FundamentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo1FundamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
