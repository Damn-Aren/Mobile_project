import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCurAlumnPage } from './list-cur-alumn.page';

describe('ListCurAlumnPage', () => {
  let component: ListCurAlumnPage;
  let fixture: ComponentFixture<ListCurAlumnPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCurAlumnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
