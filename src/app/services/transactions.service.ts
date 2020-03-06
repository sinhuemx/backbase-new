import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../models/transaction.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private url = '../../assets/data/transactions.json';

  public transactions: Subject<Transaction[]>;

  constructor(private http: HttpClient) {
    this.transactions = new Subject<Transaction[]>();
   }

  public getTransactions() {
    return this.http.get<Transaction[]>(this.url);
  }

  public setData() {
    this.getTransactions().subscribe((data) => {
      this.transactions.next(data);
    });
  }

  public setTransaction(transaction: Transaction[]) {
    this.transactions.next(transaction);
  }

}
