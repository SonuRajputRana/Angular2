import { Component, OnInit } from '@angular/core';
import { GalleryItems } from '../dataModal/GalleryItems';

@Component({
  selector: 'app-galleryitem',
  templateUrl: './galleryitem.component.html',
  styleUrls: ['./galleryitem.component.css']
})
export class GalleryitemComponent implements OnInit{

  constructor(private galleryitem:GalleryItems){}


Galleryitem!:any[]


ngOnInit(): void {
  
this.Galleryitem = this.galleryitem.GalleryImages

}


}
