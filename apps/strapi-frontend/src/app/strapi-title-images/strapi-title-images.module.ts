import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetModule } from '@ngrx/component';
import { StrapiTitleImagesComponent } from './strapi-title-images.component';

@NgModule({
    declarations: [StrapiTitleImagesComponent],
    imports: [CommonModule, LetModule],
    exports: [StrapiTitleImagesComponent],
})
export class StrapiTitleImagesModule {}
