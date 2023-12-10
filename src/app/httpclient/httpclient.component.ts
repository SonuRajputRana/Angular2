import { Component, OnInit } from '@angular/core';
import { DesignService } from '../AppServices/design.service';
import { HttpclientService } from '../AppServices/httpclient.service';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent implements OnInit{

  constructor(private _design:DesignService,
              private _http:HttpclientService) {}

  users:any =[]


ngOnInit(): void {
  
this._http.onData().subscribe(Userdata => this.users = Userdata)

}



}
