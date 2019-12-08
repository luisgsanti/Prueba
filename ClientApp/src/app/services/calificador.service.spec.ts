import { TestBed } from '@angular/core/testing';

import { CalificadorService } from './calificador.service';

describe('CalificadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalificadorService = TestBed.get(CalificadorService);
    expect(service).toBeTruthy();
  });
});
