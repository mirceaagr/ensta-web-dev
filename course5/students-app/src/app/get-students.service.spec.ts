import { TestBed } from '@angular/core/testing';

import { GetStudentsService } from './get-students.service';

describe('GetStudentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetStudentsService = TestBed.get(GetStudentsService);
    expect(service).toBeTruthy();
  });
});
