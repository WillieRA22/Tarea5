import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Moment3Page } from './moment3.page';

describe('Moment3Page', () => {
  let component: Moment3Page;
  let fixture: ComponentFixture<Moment3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Moment3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
