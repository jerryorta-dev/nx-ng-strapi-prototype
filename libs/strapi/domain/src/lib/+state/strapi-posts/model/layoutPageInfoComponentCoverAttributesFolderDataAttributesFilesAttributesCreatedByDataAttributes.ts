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
import { LayoutPageInfoComponentCoverAttributesFolderDataAttributesFilesAttributesCreatedByDataAttributesRoles } from './layoutPageInfoComponentCoverAttributesFolderDataAttributesFilesAttributesCreatedByDataAttributesRoles';

export interface LayoutPageInfoComponentCoverAttributesFolderDataAttributesFilesAttributesCreatedByDataAttributes { 
    firstname?: string;
    lastname?: string;
    username?: string;
    email?: string;
    resetPasswordToken?: string;
    registrationToken?: string;
    isActive?: boolean;
    roles?: LayoutPageInfoComponentCoverAttributesFolderDataAttributesFilesAttributesCreatedByDataAttributesRoles;
    blocked?: boolean;
    preferedLanguage?: string;
    createdAt?: Date;
    updatedAt?: Date;
    createdBy?: BlogPagListResponseDataItemAttributesCreatedBy;
    updatedBy?: BlogPagListResponseDataItemAttributesCreatedBy;
}