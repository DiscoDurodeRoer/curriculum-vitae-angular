import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeTech } from './badge-tech';

describe('BadgeTech', () => {
  let component: BadgeTech;
  let fixture: ComponentFixture<BadgeTech>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeTech],
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeTech);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
