import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }


addingproduct(products:any[]){
  return this.http.put('https://newr-52112-default-rtdb.firebaseio.com/project.json'
  ,products)
}


}
