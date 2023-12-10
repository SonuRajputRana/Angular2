import { Component, OnInit } from '@angular/core';
import { GalleryItems } from '../dataModal/GalleryItems';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-galleryimgs',
  templateUrl: './galleryimgs.component.html',
  styleUrls: ['./galleryimgs.component.css']
})
export class GalleryimgsComponent implements OnInit{

constructor(private images:GalleryItems,
  private _actevatedroutes:ActivatedRoute){}


Galleryimg!:any[]
selecteditem!:any
id!:number
ngOnInit(): void {
  
// this.Galleryimg = this.images.GalleryImages;
// console.log(this.Galleryimg)



this._actevatedroutes.params.subscribe((params:Params) => {
this.id = params['id'];

this.selecteditem = this.images.GalleryImages[this.id-1]
})

}


}
