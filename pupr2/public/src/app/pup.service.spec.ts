import { TestBed, inject } from '@angular/core/testing';

import { PupService } from './pup.service';

describe('PupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PupService]
    });
  });

  it('should be created', inject([PupService], (service: PupService) => {
    expect(service).toBeTruthy();
  }));
});
