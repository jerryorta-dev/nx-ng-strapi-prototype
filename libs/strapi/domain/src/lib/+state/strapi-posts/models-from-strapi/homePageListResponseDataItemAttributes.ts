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
import { BlogPostsSelectionComponent } from './blogPostsSelectionComponent';
import { LayoutFeaturedCourseComponent } from './layoutFeaturedCourseComponent';
import { LayoutHeroComponent } from './layoutHeroComponent';
import { LayoutMission } from './layoutMission';
import { LayoutNewsletterForm } from './layoutNewsletterForm';
import { LayoutServicesPreviewComponent } from './layoutServicesPreviewComponent';
import { SeoSeoinformationComponent } from './seoSeoinformationComponent';

export interface HomePageListResponseDataItemAttributes { 
    title?: string;
    hero?: LayoutHeroComponent;
    servicesPreview?: LayoutServicesPreviewComponent;
    featuredCourse?: LayoutFeaturedCourseComponent;
    postsSelection?: BlogPostsSelectionComponent;
    dynamicHomeSection?: Array<LayoutNewsletterForm | LayoutMission>;
    seo?: SeoSeoinformationComponent;
    createdAt?: Date;
    updatedAt?: Date;
    publishedAt?: Date;
    createdBy?: BlogPagListResponseDataItemAttributesCreatedBy;
    updatedBy?: BlogPagListResponseDataItemAttributesCreatedBy;
}