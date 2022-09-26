import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'nx-ng-strapi-prototype-strapi-title-images',
    templateUrl: './strapi-title-images.component.html',
    styleUrls: ['./strapi-title-images.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StrapiTitleImagesComponent {
    @Input() title = '';
    @Input() images: string[] = [];
}
