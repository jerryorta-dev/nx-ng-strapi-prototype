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
import { UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsers } from './usersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsers';

export interface UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributes { 
    name?: string;
    description?: string;
    type?: string;
    permissions?: LayoutPageInfoComponentCoverAttributesRelated;
    users?: UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsers;
    createdAt?: Date;
    updatedAt?: Date;
    createdBy?: BlogPagListResponseDataItemAttributesCreatedBy;
    updatedBy?: BlogPagListResponseDataItemAttributesCreatedBy;
}