import { TestBed } from '@angular/core/testing';

import { UTServicesService } from './ut-services.service';

describe('UTServicesService', (): void => {
  let service: UTServicesService

  beforeEach((): void => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(UTServicesService)
  })

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  })
})
