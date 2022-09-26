import { TestBed } from '@angular/core/testing';

import { StrapiPostsService } from './strapi-posts.service';

describe('StrapiPostsService', () => {
  let service: StrapiPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrapiPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
