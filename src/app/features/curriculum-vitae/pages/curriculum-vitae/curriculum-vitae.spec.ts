import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumVitae } from './curriculum-vitae';

describe('CurriculumVitae', () => {
  let component: CurriculumVitae;
  let fixture: ComponentFixture<CurriculumVitae>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurriculumVitae],
    }).compileComponents();

    fixture = TestBed.createComponent(CurriculumVitae);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
