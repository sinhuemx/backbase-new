import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../models/transaction.model';
import {  } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private url = '../../assets/data/transactions.json';

  public transactions: EventEmitter<Transaction[]>;

  constructor(private http: HttpClient) {
    this.transactions = new EventEmitter<Transaction[]>();
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
