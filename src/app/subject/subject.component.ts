import { Component } from '@angular/core';
import { HttpclientService } from '../AppServices/httpclient.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
constructor(private _design:HttpclientService){
  this._design.Username.subscribe(data => this.username = data)
}

  username:any

  step:any
}