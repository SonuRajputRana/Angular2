import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  // Selected:boolean = true
  @Input() productvalue:any 

  @Output() custumevent = new EventEmitter;
       value:boolean = true
  onAddcard(){
    this.custumevent.emit(this.productvalue)
  }
}
