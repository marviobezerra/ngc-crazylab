import { TestBed } from '@angular/core/testing';

import { FcVisionService } from './fc-vision.service';

describe('FcVisionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FcVisionService = TestBed.get(FcVisionService);
    expect(service).toBeTruthy();
  });
});
