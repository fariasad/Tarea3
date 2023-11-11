import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpcionServiciosPage } from './opcion-servicios.page';

describe('OpcionServiciosPage', () => {
  let component: OpcionServiciosPage;
  let fixture: ComponentFixture<OpcionServiciosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OpcionServiciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
