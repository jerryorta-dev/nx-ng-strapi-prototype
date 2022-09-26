import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { PostListResponseDataItem } from './models-from-strapi/postListResponseDataItem';
import * as StrapiPostsActions from './strapi-posts.actions';

export const strapiPostsFeatureKey = 'strapiPosts';

export type StrapiPostState = EntityState<PostListResponseDataItem>;

export const adapter: EntityAdapter<PostListResponseDataItem> =
    createEntityAdapter<PostListResponseDataItem>();

export const initialStrapiState: StrapiPostState = adapter.getInitialState({
    // additional entity state properties
});

export const reducer = createReducer(
    initialStrapiState,
    on(StrapiPostsActions.addStrapiPost, (state, action) =>
        adapter.addOne(action.strapiPost, state)
    ),
    on(StrapiPostsActions.upsertStrapiPost, (state, action) =>
        adapter.upsertOne(action.strapiPost, state)
    ),
    on(StrapiPostsActions.addStrapiPosts, (state, action) =>
        adapter.addMany(action.strapiPosts, state)
    ),
    on(StrapiPostsActions.upsertStrapiPosts, (state, action) =>
        adapter.upsertMany(action.strapiPosts, state)
    ),
    on(StrapiPostsActions.updateStrapiPost, (state, action) =>
        adapter.updateOne(action.strapiPost, state)
    ),
    on(StrapiPostsActions.updateStrapiPosts, (state, action) =>
        adapter.updateMany(action.strapiPosts, state)
    ),
    on(StrapiPostsActions.deleteStrapiPost, (state, action) =>
        adapter.removeOne(action.id, state)
    ),
    on(StrapiPostsActions.deleteStrapiPosts, (state, action) =>
        adapter.removeMany(action.ids, state)
    ),
    on(StrapiPostsActions.loadStrapiPosts, (state, action) =>
        adapter.setAll(action.strapiPosts, state)
    ),
    on(StrapiPostsActions.clearStrapiPosts, (state) => adapter.removeAll(state))
);
