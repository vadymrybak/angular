import { TestBed, inject } from '@angular/core/testing';

import { MainFormService } from './main-form.service';

describe('MainFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainFormService]
    });
  });

  it('should be created', inject([MainFormService], (service: MainFormService) => {
    expect(service).toBeTruthy();
  }));
});
