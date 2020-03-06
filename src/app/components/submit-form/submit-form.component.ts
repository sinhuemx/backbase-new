import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.model';
import { TransactionService } from 'src/app/services/transactions.service';
import { IAccount } from 'src/app/models/account.model';

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

  public amoutnFromAccount: number;

  public toAccount: string;

  public amount: number;

  public accounts: IAccount[] = [
    {value: 'Free Checking(5465)', id: 1, amount: 460.60},
    {value: 'Free Checking(2133)', id: 2, amount: 330.4},
    {value: 'Savings (5465)', id: 3, amount: 580.53}
  ];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((result) => {
      console.log('JSON data: ', result);
      this.transactions = result;
    });
  }

  onSubmit(fromAcount) {
    console.log('Amount from account: ', this.amoutnFromAccount);

    console.log('To Account: ', this.toAccount);

    console.log('Amount: ', this.amount);

    const result = this.amoutnFromAccount - this.amount;

    console.log('Result: ', result);
  }

  onChangeFromAccount(event) {
    this.amoutnFromAccount = this.accounts.find(i => event.value === i.id).amount;
  }

  onChangeToAccount(event) {
    this.toAccount = this.transactions.find(i => event.value === i.merchant).merchant;
  }
}
