import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostListResponse } from './models-from-strapi/postListResponse';

@Injectable({
    providedIn: 'root',
})
export class StrapiPostsService {
    constructor(private client: HttpClient) {}

    getPosts(): Observable<PostListResponse> {
        return this.client.get<PostListResponse>(
            'http://localhost:1337/api/posts',
            {
                params: {
                    populate: '*',
                },
            }
        );
    }
}
