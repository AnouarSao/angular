import { TestBed } from '@angular/core/testing';

import { ChallengeHttpService } from './challenge-http.service';

describe('ChallengeHttpService', () => {
  let service: ChallengeHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChallengeHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
