import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.model';
import { TransactionService } from 'src/app/services/transactions.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent implements OnInit {

  public transactions: Transaction[];

  accounts: any[] = [
    {value: 'Free Checking(5465)', id: 1},
    {value: 'Free Checking(2133)', id: 2},
    {value: 'Savings (5465)', id: 3}
  ];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((result) => {
      console.log('JSON data: ', result);
      this.transactions = result;
    });
  }



}
