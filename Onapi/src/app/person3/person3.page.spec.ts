import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Person3Page } from './person3.page';

describe('Person3Page', () => {
  let component: Person3Page;
  let fixture: ComponentFixture<Person3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Person3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
