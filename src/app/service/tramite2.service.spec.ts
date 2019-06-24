import { TestBed } from '@angular/core/testing';

import { Tramite2Service } from './tramite2.service';

describe('Tramite2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Tramite2Service = TestBed.get(Tramite2Service);
    expect(service).toBeTruthy();
  });
});
