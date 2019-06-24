import { TestBed } from '@angular/core/testing';

import { Tramite1Service } from './tramite1.service';

describe('Tramite1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Tramite1Service = TestBed.get(Tramite1Service);
    expect(service).toBeTruthy();
  });
});
