import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.model';
import { TransactionService } from 'src/app/services/transactions.service';
import { IAccount } from 'src/app/models/account.model';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent implements OnInit {


  public transactions: Transaction[];

  public amoutnFromAccount: number;

  public toAccount: string;

  public amount: number;

  public accountIndex: number;

  public accointId: number;

  public accounts: IAccount[] = [
    {value: 'Free Checking(5465)', id: 1, amount: 460.60},
    {value: 'Free Checking(2133)', id: 2, amount: 330.4},
    {value: 'Savings (5465)', id: 3, amount: 580.53}
  ];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.setData();
    this.transactionService.transactions.subscribe(result => {
      this.transactions = result;
    });

  }

  onSubmit(fromAcount) {
    const transactionModified = this.transactions.find((t) => t.merchant === this.toAccount);

    this.getAccountDetails(this.accointId);

    const remaining = this.amoutnFromAccount - this.amount;

    transactionModified.amount = remaining.toString();

    const transaction: Transaction = {
      amount: this.amount.toString(),
      categoryCode: '#12a580',
      merchant: this.toAccount,
      merchantLogo: transactionModified.merchantLogo,
      transactionDate: new Date().getTime(),
      transactionType: 'Card Payment'
    };

    this.accounts[this.accountIndex].amount = remaining;

    this.transactions.unshift(transaction);

    this.transactionService.setTransaction(this.transactions);
  }

  getAccountDetails(id) {
    this.amoutnFromAccount = this.accounts.find(i => id === i.id).amount;
    this.accountIndex = this.accounts.findIndex(i => id === i.id);
    this.accointId = id;
  }

  onChangeFromAccount(event) {
    this.getAccountDetails(event.value);
  }

  onChangeToAccount(event) {
    this.toAccount = this.transactions.find(i => event.value === i.merchant).merchant;
  }
}
