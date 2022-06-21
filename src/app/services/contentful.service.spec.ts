import { TestBed } from '@angular/core/testing';

import { ContentfulService } from './contentful.service';

describe('ContentfulService', () => {
  let service: ContentfulService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentfulService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
