import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpcionMapainteractivoPage } from './opcion-mapainteractivo.page';

describe('OpcionMapainteractivoPage', () => {
  let component: OpcionMapainteractivoPage;
  let fixture: ComponentFixture<OpcionMapainteractivoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OpcionMapainteractivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
