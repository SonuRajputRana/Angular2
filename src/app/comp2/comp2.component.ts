import { Component } from '@angular/core';
import { HttpclientService } from '../AppServices/httpclient.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
 
constructor(private _http:HttpclientService){
  this._http.Username.subscribe(data => this.username = data)
}

  username:any

  onvou(name:any){
this._http.Username.next(name.value)
  }
}
