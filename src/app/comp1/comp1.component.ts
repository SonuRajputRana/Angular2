import { Component } from '@angular/core';
import { HttpclientService } from '../AppServices/httpclient.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
constructor(private _http:HttpclientService){
  this._http.Username.subscribe(data => {
    this.username = data
  })
}

  username:any

  onUpdate(uname:any){
   this._http.Username.next(uname.value)
  }

}
