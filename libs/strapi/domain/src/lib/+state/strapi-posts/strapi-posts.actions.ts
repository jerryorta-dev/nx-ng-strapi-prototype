import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { PostListResponseDataItem } from './model/postListResponseDataItem';

export const loadStrapiPostss = createAction(
    '[PostListResponseDataItem/API] Load StrapiPostss',
    props<{ strapiPosts: PostListResponseDataItem[] }>()
);

export const addStrapiPosts = createAction(
    '[PostListResponseDataItem/API] Add PostListResponseDataItem',
    props<{
        strapiPost: PostListResponseDataItem;
    }>()
);

export const upsertStrapiPosts = createAction(
    '[PostListResponseDataItem/API] Upsert PostListResponseDataItem',
    props<{
        strapiPost: PostListResponseDataItem;
    }>()
);

export const addStrapiPostss = createAction(
    '[PostListResponseDataItem/API] Add StrapiPostss',
    props<{ strapiPosts: PostListResponseDataItem[] }>()
);

export const upsertStrapiPostss = createAction(
    '[PostListResponseDataItem/API] Upsert StrapiPostss',
    props<{ strapiPosts: PostListResponseDataItem[] }>()
);

export const updateStrapiPost = createAction(
    '[PostListResponseDataItem/API] Update PostListResponseDataItem',
    props<{
        strapiPost: Update<PostListResponseDataItem>;
    }>()
);

export const updateStrapiPosts = createAction(
    '[PostListResponseDataItem/API] Update StrapiPostss',
    props<{ strapiPosts: Update<PostListResponseDataItem>[] }>()
);

export const deleteStrapiPosts = createAction(
    '[PostListResponseDataItem/API] Delete PostListResponseDataItem',
    props<{ id: string }>()
);

export const deleteStrapiPostss = createAction(
    '[PostListResponseDataItem/API] Delete StrapiPostss',
    props<{ ids: string[] }>()
);

export const clearStrapiPosts = createAction(
    '[PostListResponseDataItem/API] Clear StrapiPostss'
);
