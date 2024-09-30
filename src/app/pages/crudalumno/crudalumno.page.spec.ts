import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudalumnoPage } from './crudalumno.page';

describe('CrudalumnoPage', () => {
  let component: CrudalumnoPage;
  let fixture: ComponentFixture<CrudalumnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudalumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
