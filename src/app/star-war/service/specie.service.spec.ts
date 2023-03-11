import { TestBed } from '@angular/core/testing';

import { SpeciesService } from './specie.service';

describe('SpeciesService', () => {
  let service: SpeciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
