import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { PostListResponseDataItem } from './models-from-strapi/postListResponseDataItem';

export const initStrapiEffect = createAction(
    '[PostListResponseDataItem/API] Init Strapi Effect'
);

export const loadStrapiPosts = createAction(
    '[PostListResponseDataItem/API] Load PostListResponseDataItems',
    props<{ strapiPosts: PostListResponseDataItem[] }>()
);

export const addStrapiPost = createAction(
    '[PostListResponseDataItem/API] Add PostListResponseDataItem',
    props<{
        strapiPost: PostListResponseDataItem;
    }>()
);

export const upsertStrapiPost = createAction(
    '[PostListResponseDataItem/API] Upsert PostListResponseDataItem',
    props<{
        strapiPost: PostListResponseDataItem;
    }>()
);

export const addStrapiPosts = createAction(
    '[PostListResponseDataItem/API] Add PostListResponseDataItems',
    props<{ strapiPosts: PostListResponseDataItem[] }>()
);

export const upsertStrapiPosts = createAction(
    '[PostListResponseDataItem/API] Upsert PostListResponseDataItema',
    props<{ strapiPosts: PostListResponseDataItem[] }>()
);

export const updateStrapiPost = createAction(
    '[PostListResponseDataItem/API] Update PostListResponseDataItem',
    props<{
        strapiPost: Update<PostListResponseDataItem>;
    }>()
);

export const updateStrapiPosts = createAction(
    '[PostListResponseDataItem/API] Update PostListResponseDataItems',
    props<{ strapiPosts: Update<PostListResponseDataItem>[] }>()
);

export const deleteStrapiPost = createAction(
    '[PostListResponseDataItem/API] Delete PostListResponseDataItem',
    props<{ id: string }>()
);

export const deleteStrapiPosts = createAction(
    '[PostListResponseDataItem/API] Delete PostListResponseDataItems',
    props<{ ids: string[] }>()
);

export const clearStrapiPosts = createAction(
    '[PostListResponseDataItem/API] Clear PostListResponseDataItems'
);
