import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeccPage } from './secc.page';

describe('SeccPage', () => {
  let component: SeccPage;
  let fixture: ComponentFixture<SeccPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
