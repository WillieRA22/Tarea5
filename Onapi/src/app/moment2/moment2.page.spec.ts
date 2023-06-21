import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Moment2Page } from './moment2.page';

describe('Moment2Page', () => {
  let component: Moment2Page;
  let fixture: ComponentFixture<Moment2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Moment2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
