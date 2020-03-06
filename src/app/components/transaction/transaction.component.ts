import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.model';
import { TransactionService } from 'src/app/services/transactions.service';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  date: string;
  img: number;
  user: number;
  money: string;
}

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  public displayedColumns: string[] = ['date', 'img', 'user', 'money'];
  public dataSource: MatTableDataSource<Transaction>;
  //public displayedColumns: Transaction;


  public transactions: Transaction[];

  constructor(private transactionService: TransactionService) {


   }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((result) => {
      //console.log('JSON data: ', result);
      //this.transactions = result;
      //this.displayedColumns = new Transaction();
      //console.log('okgo', this.displayedColumns);
      this.dataSource = new MatTableDataSource(result);
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
