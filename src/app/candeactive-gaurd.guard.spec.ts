import { TestBed } from '@angular/core/testing';

import { CandeactiveGaurdGuard } from './candeactive-gaurd.guard';

describe('CandeactiveGaurdGuard', () => {
  let guard: CandeactiveGaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandeactiveGaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
