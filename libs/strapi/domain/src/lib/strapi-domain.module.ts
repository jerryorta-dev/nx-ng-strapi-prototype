import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromStrapiPosts from './+state/strapi-posts/strapi-posts.reducer';
import { StrapiPostsEffects } from './+state/strapi-posts/strapi-posts.effects';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        StoreModule.forFeature(
            fromStrapiPosts.strapiPostsFeatureKey,
            fromStrapiPosts.reducer
        ),
        EffectsModule.forFeature([StrapiPostsEffects]),
    ],
})
export class StrapiDomainModule {}
