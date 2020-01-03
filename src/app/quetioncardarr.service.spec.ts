import { TestBed } from '@angular/core/testing';

import { QuetioncardarrService } from './quetioncardarr.service';

describe('QuetioncardarrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuetioncardarrService = TestBed.get(QuetioncardarrService);
    expect(service).toBeTruthy();
  });
});
