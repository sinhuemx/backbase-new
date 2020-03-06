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


  public transactions: Transaction[];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    // Getting the data form the endpoint
    this.transactionService.setData();

    // Getting the data from transactions observable.
    this.transactionService.transactions.subscribe(result => {

      this.dataSource = new MatTableDataSource(result);

    });
  }

  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

}
