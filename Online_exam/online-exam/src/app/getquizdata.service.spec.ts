import { TestBed } from '@angular/core/testing';

import { GetquizdataService } from './getquizdata.service';

describe('GetquizdataService', () => {
  let service: GetquizdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetquizdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
