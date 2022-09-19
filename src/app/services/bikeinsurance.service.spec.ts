import { TestBed } from '@angular/core/testing';

import { BikeinsuranceService } from './bikeinsurance.service';

describe('BikeinsuranceService', () => {
  let service: BikeinsuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikeinsuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
