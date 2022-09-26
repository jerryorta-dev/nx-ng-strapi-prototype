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
import { LayoutPageInfoComponentCover } from './layoutPageInfoComponentCover';
import { LayoutPageInfoComponentExcludedTags } from './layoutPageInfoComponentExcludedTags';

export interface CourseListResponseDataItemAttributes { 
    title?: string;
    description?: string;
    slug?: string;
    images?: LayoutPageInfoComponentCover;
    tags?: LayoutPageInfoComponentExcludedTags;
    createdAt?: Date;
    updatedAt?: Date;
    publishedAt?: Date;
    createdBy?: BlogPagListResponseDataItemAttributesCreatedBy;
    updatedBy?: BlogPagListResponseDataItemAttributesCreatedBy;
}