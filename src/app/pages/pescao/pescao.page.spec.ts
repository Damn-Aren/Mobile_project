import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PescaoPage } from './pescao.page';

describe('PescaoPage', () => {
  let component: PescaoPage;
  let fixture: ComponentFixture<PescaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PescaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
