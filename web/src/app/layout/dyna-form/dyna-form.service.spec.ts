import { TestBed } from '@angular/core/testing';

import { DynaFormService } from './dyna-form.service';

describe('DynaFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynaFormService = TestBed.get(DynaFormService);
    expect(service).toBeTruthy();
  });
});
