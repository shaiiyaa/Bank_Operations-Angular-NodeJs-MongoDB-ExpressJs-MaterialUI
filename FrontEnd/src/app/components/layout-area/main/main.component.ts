import { Component, OnInit } from '@angular/core';
import OperationModel from 'src/app/models/operation.model';
import { BankOperationsService } from 'src/app/services/bank-operations.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private myOperationService: BankOperationsService, private notify: NotifyService,) { }
  
  public bank_accounts: number[] = [];
  public picked_account: number;
  public account_operation: OperationModel[]

  async ngOnInit() {
    const accounts = await this.myOperationService.getAllOperations();
    for(let a of accounts) {
      if (this.bank_accounts.indexOf(a.accountNumber) === -1) this.bank_accounts.push(a.accountNumber);
    }
  }

  async submit() {
    try {
      this.account_operation = await this.myOperationService.getOperation(this.picked_account);
      this.notify.success("Account Found");

    } catch (error) {
      this.notify.error(error);
    }
      }

}
