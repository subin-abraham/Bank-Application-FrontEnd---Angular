import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  useracno: any
  transaction: any
  // currentacno: any;


  constructor(private ds: DataService) {
    this.useracno = JSON.parse(localStorage.getItem('currentacno') || '');
    this.ds.getTransaction(this.useracno)
      .subscribe((result: any) => {
        this.transaction = result.transaction
      },
        result => {
          alert(result.error.message)
        }
      )
    // this.useracno=this.ds.currentacno
    //  this.transactions=this.ds.getTransaction(this.useracno)

  }
  // currentacno(currentacno: any) {
  //   throw new Error('Method not implemented.');
  // }
  // acno(acno: any) {
  //   throw new Error('Method not implemented.');
  // }

  ngOnInit(): void {
  }

}
