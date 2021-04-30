import { TestBed } from '@angular/core/testing';

import { EventsServiceService } from './events-service.service';

describe('EventsServiceService', () => {
  let service: EventsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
