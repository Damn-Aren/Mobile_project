import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LisAlumPage } from './lis-alum.page';

describe('LisAlumPage', () => {
  let component: LisAlumPage;
  let fixture: ComponentFixture<LisAlumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LisAlumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
