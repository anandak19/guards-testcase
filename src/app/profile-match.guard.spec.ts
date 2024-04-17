import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { profileMatchGuard } from './profile-match.guard';

describe('profileMatchGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => profileMatchGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
