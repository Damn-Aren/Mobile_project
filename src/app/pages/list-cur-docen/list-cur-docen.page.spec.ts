import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCurDocenPage } from './list-cur-docen.page';

describe('ListCurDocenPage', () => {
  let component: ListCurDocenPage;
  let fixture: ComponentFixture<ListCurDocenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCurDocenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
