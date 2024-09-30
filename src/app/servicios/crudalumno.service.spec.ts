import { TestBed } from '@angular/core/testing';

import { CrudalumnoService } from './crudalumno.service';

describe('CrudalumnoService', () => {
  let service: CrudalumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudalumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
