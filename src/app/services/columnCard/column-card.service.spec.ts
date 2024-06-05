import { TestBed } from '@angular/core/testing';

import { ColumnCardService } from './column-card.service';

describe('ColumnCardService', () => {
  let service: ColumnCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColumnCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
