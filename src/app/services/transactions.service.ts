import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private url = '../../assets/data/transactions.json';

  constructor(private http: HttpClient) { }

  public getTransactions() {
    return this.http.get<Transaction[]>(this.url);
  }
}
