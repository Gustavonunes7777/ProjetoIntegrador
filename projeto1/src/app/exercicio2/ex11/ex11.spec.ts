import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex11 } from './ex11';

describe('Ex11', () => {
  let component: Ex11;
  let fixture: ComponentFixture<Ex11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex11],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
