import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaformularioComponent } from './ventaformulario.component';

describe('VentaformularioComponent', () => {
  let component: VentaformularioComponent;
  let fixture: ComponentFixture<VentaformularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentaformularioComponent]
    });
    fixture = TestBed.createComponent(VentaformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
