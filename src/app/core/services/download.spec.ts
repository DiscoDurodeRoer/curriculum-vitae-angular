import { TestBed } from '@angular/core/testing';

import { Download } from './download';

describe('Download', () => {
  let service: Download;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Download);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
