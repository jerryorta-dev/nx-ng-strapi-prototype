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
import { LayoutLinkComponent } from './layoutLinkComponent';
import { LayoutPageInfoComponentCoverAttributesFolderDataAttributesFilesAttributesCreatedBy } from './layoutPageInfoComponentCoverAttributesFolderDataAttributesFilesAttributesCreatedBy';

export interface MenuListResponseDataItemAttributes { 
    menuItems?: Array<LayoutLinkComponent>;
    name?: string;
    slug?: string;
    createdAt?: Date;
    updatedAt?: Date;
    publishedAt?: Date;
    createdBy?: LayoutPageInfoComponentCoverAttributesFolderDataAttributesFilesAttributesCreatedBy;
    updatedBy?: BlogPagListResponseDataItemAttributesCreatedBy;
}