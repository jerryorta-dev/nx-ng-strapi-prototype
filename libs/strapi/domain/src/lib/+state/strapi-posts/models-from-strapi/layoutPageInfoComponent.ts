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
import { LayoutPageInfoComponentCover } from './layoutPageInfoComponentCover';
import { LayoutPageInfoComponentExcludedTags } from './layoutPageInfoComponentExcludedTags';
import { LayoutPageInfoComponentSeo } from './layoutPageInfoComponentSeo';

export interface LayoutPageInfoComponent { 
    id?: string;
    content?: string;
    cover?: LayoutPageInfoComponentCover;
    seo?: LayoutPageInfoComponentSeo;
    excludedTags?: LayoutPageInfoComponentExcludedTags;
}