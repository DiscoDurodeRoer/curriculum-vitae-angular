import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMe } from './about-me';

describe('AboutMe', () => {
  let component: AboutMe;
  let fixture: ComponentFixture<AboutMe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMe],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutMe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
