import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Person2Page } from './person2.page';

describe('Person2Page', () => {
  let component: Person2Page;
  let fixture: ComponentFixture<Person2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Person2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
