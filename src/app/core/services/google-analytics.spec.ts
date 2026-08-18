import { TestBed } from '@angular/core/testing';

import { GoogleAnalytics } from './google-analytics';

describe('GoogleAnalytics', () => {
  let service: GoogleAnalytics;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleAnalytics);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
