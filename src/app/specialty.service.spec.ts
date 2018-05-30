import { TestBed, inject } from '@angular/core/testing';

import { SpecialtyService } from './specialty.service';

describe('SpecialtyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpecialtyService]
    });
  });

  it('should be created', inject([SpecialtyService], (service: SpecialtyService) => {
    expect(service).toBeTruthy();
  }));
});
