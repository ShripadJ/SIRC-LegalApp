/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CreatecaseService } from './createcase.service';

describe('Service: Createcase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreatecaseService]
    });
  });

  it('should ...', inject([CreatecaseService], (service: CreatecaseService) => {
    expect(service).toBeTruthy();
  }));
});
