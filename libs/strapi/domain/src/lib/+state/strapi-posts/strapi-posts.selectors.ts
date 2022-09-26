import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter } from './strapi-posts.reducer';
import * as fromStrapiPosts from './strapi-posts.reducer';

export const selectStrapiPostFeatureState =
    createFeatureSelector<fromStrapiPosts.StrapiPostState>(
        fromStrapiPosts.strapiPostsFeatureKey
    );

const { selectIds, selectEntities, selectAll, selectTotal } =
    adapter.getSelectors();

export const selectAllStrapiPosts = createSelector(
    selectStrapiPostFeatureState,
    selectAll
);
