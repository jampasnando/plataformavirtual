import { TestBed } from '@angular/core/testing';

import { InfraccionvehiculosService } from './infraccionvehiculos.service';

describe('InfraccionvehiculosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfraccionvehiculosService = TestBed.get(InfraccionvehiculosService);
    expect(service).toBeTruthy();
  });
});
