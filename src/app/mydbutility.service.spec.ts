import { TestBed } from '@angular/core/testing';

import { MydbutilityService } from './mydbutility.service';

describe('MydbutilityService', () => {
  let service: MydbutilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MydbutilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
