import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryimgsComponent } from './galleryimgs.component';

describe('GalleryimgsComponent', () => {
  let component: GalleryimgsComponent;
  let fixture: ComponentFixture<GalleryimgsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryimgsComponent]
    });
    fixture = TestBed.createComponent(GalleryimgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
