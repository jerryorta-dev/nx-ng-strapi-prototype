import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { PostListResponseDataItem } from './model/postListResponseDataItem';
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
    on(StrapiPostsActions.addStrapiPosts, (state, action) =>
        adapter.addOne(action.strapiPost, state)
    ),
    on(StrapiPostsActions.upsertStrapiPosts, (state, action) =>
        adapter.upsertOne(action.strapiPost, state)
    ),
    on(StrapiPostsActions.addStrapiPostss, (state, action) =>
        adapter.addMany(action.strapiPosts, state)
    ),
    on(StrapiPostsActions.upsertStrapiPostss, (state, action) =>
        adapter.upsertMany(action.strapiPosts, state)
    ),
    on(StrapiPostsActions.updateStrapiPost, (state, action) =>
        adapter.updateOne(action.strapiPost, state)
    ),
    on(StrapiPostsActions.updateStrapiPosts, (state, action) =>
        adapter.updateMany(action.strapiPosts, state)
    ),
    on(StrapiPostsActions.deleteStrapiPosts, (state, action) =>
        adapter.removeOne(action.id, state)
    ),
    on(StrapiPostsActions.deleteStrapiPostss, (state, action) =>
        adapter.removeMany(action.ids, state)
    ),
    on(StrapiPostsActions.loadStrapiPostss, (state, action) =>
        adapter.setAll(action.strapiPosts, state)
    ),
    on(StrapiPostsActions.clearStrapiPosts, (state) => adapter.removeAll(state))
);
