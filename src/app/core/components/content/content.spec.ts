import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Content } from './content';

describe('Content', () => {
  let component: Content;
  let fixture: ComponentFixture<Content>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Content],
    }).compileComponents();

    fixture = TestBed.createComponent(Content);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
