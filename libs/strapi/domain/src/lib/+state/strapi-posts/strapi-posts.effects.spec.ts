import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StrapiPostsEffects } from './strapi-posts.effects';

describe('StrapiPostsEffects', () => {
  let actions$: Observable<any>;
  let effects: StrapiPostsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StrapiPostsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(StrapiPostsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
