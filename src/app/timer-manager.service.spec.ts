import { TestBed } from '@angular/core/testing';

import { TimerManagerService } from './timer-manager.service';

describe('TimerManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimerManagerService = TestBed.get(TimerManagerService);
    expect(service).toBeTruthy();
  });
});
