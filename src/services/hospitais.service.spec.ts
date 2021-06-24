/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HospitaisService } from './hospitais.service';

describe('Service: Hospitais', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HospitaisService]
    });
  });

  it('should ...', inject([HospitaisService], (service: HospitaisService) => {
    expect(service).toBeTruthy();
  }));
});
