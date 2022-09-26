import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromStrapiPosts from './+state/strapi-posts/strapi-posts.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(
            fromStrapiPosts.strapiPostsFeatureKey,
            fromStrapiPosts.reducer
        ),
        EffectsModule.forFeature([]),
    ],
})
export class StrapiDomainModule {}
