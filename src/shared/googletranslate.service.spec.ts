/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GoogletranslateService } from './googletranslate.service';

describe('Service: Googletranslate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogletranslateService]
    });
  });

  it('should ...', inject([GoogletranslateService], (service: GoogletranslateService) => {
    expect(service).toBeTruthy();
  }));
});
