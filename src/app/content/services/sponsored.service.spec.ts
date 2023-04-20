import { TestBed } from '@angular/core/testing';

import { SponsoredService } from './sponsored.service';

describe('SponsoredService', () => {
  let service: SponsoredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SponsoredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
