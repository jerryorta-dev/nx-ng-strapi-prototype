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
import { ConfigSocialLinkComponent } from './configSocialLinkComponent';

export interface CompanyInfoRequestData { 
    logo?: number | string;
    socialLinks?: Array<ConfigSocialLinkComponent>;
    companyEmail: string;
    companyName: string;
    vat?: string;
    companyAddress?: string;
}