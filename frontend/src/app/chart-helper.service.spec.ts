import { TestBed } from '@angular/core/testing';

import { ChartHelperService } from './chart-helper.service';

describe('ChartHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChartHelperService = TestBed.get(ChartHelperService);
    expect(service).toBeTruthy();
  });
});
