import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex12 } from './ex12';

describe('Ex12', () => {
  let component: Ex12;
  let fixture: ComponentFixture<Ex12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex12],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex12);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
