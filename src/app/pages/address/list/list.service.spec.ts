import { TestBed } from '@angular/core/testing';

import { List.ServiceService } from './list.service.service';

describe('List.ServiceService', () => {
  let service: List.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(List.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
