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
import { BlogPagListResponseMeta } from './blogPagListResponseMeta';
import { SeoConfigListResponseDataItem } from './seoConfigListResponseDataItem';

export interface SeoConfigListResponse { 
    data?: Array<SeoConfigListResponseDataItem>;
    meta?: BlogPagListResponseMeta;
}