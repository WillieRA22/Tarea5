import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MomentPage } from './moment.page';

describe('MomentPage', () => {
  let component: MomentPage;
  let fixture: ComponentFixture<MomentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MomentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
