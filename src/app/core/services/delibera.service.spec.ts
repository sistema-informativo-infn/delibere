import { TestBed } from '@angular/core/testing';

import { DeliberaService } from './delibera.service';

describe('DeliberaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeliberaService = TestBed.get(DeliberaService);
    expect(service).toBeTruthy();
  });
});
