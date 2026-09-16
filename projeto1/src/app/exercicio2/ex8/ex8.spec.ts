import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex8 } from './ex8';

describe('Ex8', () => {
  let component: Ex8;
  let fixture: ComponentFixture<Ex8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex8],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
