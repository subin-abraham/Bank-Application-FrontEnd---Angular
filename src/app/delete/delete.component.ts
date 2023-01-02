import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Input() item:string | undefined
  //created a variable item
  //input is used to hold the data from parent component  

  @Output() onCancel = new EventEmitter()
  
  @Output() onDelete = new EventEmitter()
  

  constructor() { }

  ngOnInit(): void {
  }
deleteitem(){
  this.onDelete.emit(this.item)
}
  cancel(){
    this.onCancel.emit();
  }

}
