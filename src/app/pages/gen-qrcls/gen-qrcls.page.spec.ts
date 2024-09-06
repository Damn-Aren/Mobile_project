import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenQRClsPage } from './gen-qrcls.page';

describe('GenQRClsPage', () => {
  let component: GenQRClsPage;
  let fixture: ComponentFixture<GenQRClsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GenQRClsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
