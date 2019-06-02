import { TestBed } from '@angular/core/testing';

import { ChargeSessionServiceService } from './charge-session-service.service';

describe('ChargeSessionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChargeSessionServiceService = TestBed.get(ChargeSessionServiceService);
    expect(service).toBeTruthy();
  });
});
