import { Component } from '@angular/core';
import { CrudService } from '../AppServices/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {

constructor(private _crud:CrudService){}

  products:any = [
    {id:'1', name:'Laptop', price:20000},
    {id:'2', name:'Mashine', price:10000},
    {id:'3', name:'Computer', price:30000},
    {id:'4', name:'Desktop', price:40000},
  ]

  addProduct(id:any,name:any,price:any){

    this.products.push({
      id: id.value,
      name: name.value,
      price: price.value
  })
  }

  onDelete(i:any){
this.products.splice(i,1)
  }



  savePro(){
    this._crud.addingproduct(this.products).subscribe(
      (Response) => console.log(Response),
      (err)=>console.log(err)
    )
  }
}
