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
import { LayoutPageInfoComponentCoverAttributesRelated } from './layoutPageInfoComponentCoverAttributesRelated';
import { UsersPermissionsRoleListResponseDataItemAttributesPermissions } from './usersPermissionsRoleListResponseDataItemAttributesPermissions';

export interface UsersPermissionsRoleListResponseDataItemAttributes { 
    name?: string;
    description?: string;
    type?: string;
    permissions?: UsersPermissionsRoleListResponseDataItemAttributesPermissions;
    users?: LayoutPageInfoComponentCoverAttributesRelated;
    createdAt?: Date;
    updatedAt?: Date;
    createdBy?: BlogPagListResponseDataItemAttributesCreatedBy;
    updatedBy?: BlogPagListResponseDataItemAttributesCreatedBy;
}