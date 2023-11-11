import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpcionAtraccionesPage } from './opcion-atracciones.page';

describe('OpcionAtraccionesPage', () => {
  let component: OpcionAtraccionesPage;
  let fixture: ComponentFixture<OpcionAtraccionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OpcionAtraccionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
