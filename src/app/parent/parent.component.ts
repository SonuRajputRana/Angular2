import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  Addpro:any = ''
  selectvalue:any
  card:boolean = false
  onClick(pro:any){
    this.selectvalue = pro
  }

  onEventdata(event:any){
this.card = event
this.Addpro = event
  }

}
