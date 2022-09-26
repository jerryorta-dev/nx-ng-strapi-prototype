/**
 * DOCUMENTATION
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * Contact: contact-email@something.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { BlogPagListResponseDataItemAttributesCreatedBy } from './blogPagListResponseDataItemAttributesCreatedBy';
import { LayoutFeaturedCourseComponentCourseDataAttributesTags } from './layoutFeaturedCourseComponentCourseDataAttributesTags';
import { LayoutPageInfoComponentCover } from './layoutPageInfoComponentCover';
import { PostListResponseDataItemAttributesAuthors } from './postListResponseDataItemAttributesAuthors';
import { SeoSeoinformationComponent } from './seoSeoinformationComponent';

export interface PostListResponseDataItemAttributes { 
    content?: string;
    title?: string;
    slug?: string;
    cover?: LayoutPageInfoComponentCover;
    authors?: PostListResponseDataItemAttributesAuthors;
    tags?: LayoutFeaturedCourseComponentCourseDataAttributesTags;
    seo?: SeoSeoinformationComponent;
    createdAt?: Date;
    updatedAt?: Date;
    publishedAt?: Date;
    createdBy?: BlogPagListResponseDataItemAttributesCreatedBy;
    updatedBy?: BlogPagListResponseDataItemAttributesCreatedBy;
}