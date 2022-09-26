import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrapiTitleImagesComponent } from './strapi-title-images.component';

describe('StrapiTitleImagesComponent', () => {
  let component: StrapiTitleImagesComponent;
  let fixture: ComponentFixture<StrapiTitleImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrapiTitleImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrapiTitleImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
