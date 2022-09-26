import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LayoutPageInfoComponentCoverData } from './models-from-strapi/layoutPageInfoComponentCoverData';
import { PostListResponseDataItem } from './models-from-strapi/postListResponseDataItem';
import { StrapiPostCoverWithImages } from './strapi-posts.model';
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

export const selectAllStrapPostsTitlesWithCoverImages = createSelector(
    selectAllStrapiPosts,
    (posts: PostListResponseDataItem[]): StrapiPostCoverWithImages[] =>
        posts.map(
            (post: PostListResponseDataItem) =>
                <StrapiPostCoverWithImages>{
                    title: post?.attributes?.title
                        ? post?.attributes?.title
                        : '',
                    images: post.attributes?.cover?.data
                        ? post.attributes?.cover?.data.map(
                              (image: LayoutPageInfoComponentCoverData) =>
                                  image?.attributes?.url
                                      ? `http://localhost:1337${image.attributes.url}`
                                      : ''
                          )
                        : [],
                }
        )
);
