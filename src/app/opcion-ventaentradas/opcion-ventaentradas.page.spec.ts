import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpcionVentaentradasPage } from './opcion-ventaentradas.page';

describe('OpcionVentaentradasPage', () => {
  let component: OpcionVentaentradasPage;
  let fixture: ComponentFixture<OpcionVentaentradasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OpcionVentaentradasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
