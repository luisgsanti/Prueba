import { TestBed } from '@angular/core/testing';
import { DocenteServiceService } from './docente.service';


describe('DocenteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocenteServiceService = TestBed.get(DocenteServiceService);
    expect(service).toBeTruthy();
  });
});
