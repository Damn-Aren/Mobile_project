import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeAlumPage } from './home-alum.page';

describe('HomeAlumPage', () => {
  let component: HomeAlumPage;
  let fixture: ComponentFixture<HomeAlumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAlumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
