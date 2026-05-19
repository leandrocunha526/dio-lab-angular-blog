import { TestBed } from '@angular/core/testing';

import { ArtigosServiceService } from './artigos.service.service';

describe('ArtigosServiceService', () => {
  let service: ArtigosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtigosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
