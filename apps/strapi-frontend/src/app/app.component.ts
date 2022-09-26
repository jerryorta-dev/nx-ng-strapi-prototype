import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
    PostListResponseDataItem,
    selectAllStrapiPosts,
    selectAllStrapPostsTitlesWithCoverImages,
    StrapiPostCoverWithImages,
} from '@nx-ng-strapi-prototype/strapi/domain';
import { Observable } from 'rxjs';

@Component({
    selector: 'nx-ng-strapi-prototype-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    allStrapiPosts$: Observable<PostListResponseDataItem[]>;
    allStrapiPostTitlesWithImages$: Observable<StrapiPostCoverWithImages[]>;

    constructor(private store: Store) {
        this.allStrapiPosts$ = this.store.select(selectAllStrapiPosts);
        this.allStrapiPostTitlesWithImages$ = this.store.select(
            selectAllStrapPostsTitlesWithCoverImages
        );
    }
}
