import { TestBed } from '@angular/core/testing';

import { FcTrackService } from './fc-track.service';

describe('FcTrackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FcTrackService = TestBed.get(FcTrackService);
    expect(service).toBeTruthy();
  });
});
