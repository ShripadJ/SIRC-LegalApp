import { TestBed } from '@angular/core/testing';

import { CaseinfoGuard } from './caseinfo.guard';

describe('CaseinfoGuard', () => {
  let guard: CaseinfoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CaseinfoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
