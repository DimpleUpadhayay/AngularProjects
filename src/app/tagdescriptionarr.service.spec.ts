import { TestBed } from '@angular/core/testing';

import { TagdescriptionarrService } from './tagdescriptionarr.service';

describe('TagdescriptionarrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TagdescriptionarrService = TestBed.get(TagdescriptionarrService);
    expect(service).toBeTruthy();
  });
});
