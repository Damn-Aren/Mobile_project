import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfrsPage } from './infrs.page';

describe('InfrsPage', () => {
  let component: InfrsPage;
  let fixture: ComponentFixture<InfrsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfrsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
