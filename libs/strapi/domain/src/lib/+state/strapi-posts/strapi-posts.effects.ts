import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { map, switchMap } from 'rxjs/operators';
import { PostListResponse } from './models-from-strapi/postListResponse';
import * as StrapiPostsActions from './strapi-posts.actions';
import { StrapiPostsService } from './strapi-posts.service';

@Injectable()
export class StrapiPostsEffects implements OnInitEffects {
    loadStrapiPosts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(StrapiPostsActions.initStrapiEffect),
            switchMap(() =>
                this.apiService.getPosts().pipe(
                    map((response: PostListResponse) =>
                        StrapiPostsActions.upsertStrapiPosts({
                            strapiPosts: response.data ? response.data : [],
                        })
                    )
                )
            )
        );
    });

    constructor(
        private actions$: Actions,
        private apiService: StrapiPostsService
    ) {}

    ngrxOnInitEffects(): Action {
        return StrapiPostsActions.initStrapiEffect();
    }
}
