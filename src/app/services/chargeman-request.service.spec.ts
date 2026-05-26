import { TestBed } from '@angular/core/testing';

import { ChargemanRequestService } from './chargeman-request.service';

describe('ChargemanRequestService', () => {
  let service: ChargemanRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChargemanRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
