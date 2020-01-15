import { TestBed } from '@angular/core/testing';

import { GetallquestionService } from './getallquestion.service';

describe('GetallquestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetallquestionService = TestBed.get(GetallquestionService);
    expect(service).toBeTruthy();
  });
});
