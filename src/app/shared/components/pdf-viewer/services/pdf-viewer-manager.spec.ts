import { TestBed } from '@angular/core/testing';

import { PdfViewerManager } from './pdf-viewer-manager';

describe('PdfViewerManager', () => {
  let service: PdfViewerManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfViewerManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
