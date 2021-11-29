import { TestBed } from '@angular/core/testing';

import { ControlbyguardGuard } from './controlbyguard.guard';

describe('ControlbyguardGuard', () => {
  let guard: ControlbyguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ControlbyguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
