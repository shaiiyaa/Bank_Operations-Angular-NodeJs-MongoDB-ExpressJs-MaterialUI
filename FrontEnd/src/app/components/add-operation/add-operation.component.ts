import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import OperationModel from 'src/app/models/operation.model';
import OperationTypesModel from 'src/app/models/operation.types.model';
import { BankOperationsService } from 'src/app/services/bank-operations.service';
import { NotifyService } from 'src/app/services/notify.service';
import { OperationTypesService } from 'src/app/services/operation-types.service';

@Component({
  selector: 'app-add-operation',
  templateUrl: './add-operation.component.html',
  styleUrls: ['./add-operation.component.css']
})
export class AddOperationComponent implements OnInit {

  constructor(
    private myOperationService: BankOperationsService ,
    private myRouter: Router, 
    private notify: NotifyService,
    private myOperationTypes: OperationTypesService 
  ) { }

  public operation: OperationModel = new OperationModel();
  public types: OperationTypesModel[];

  async ngOnInit() {
    this.types = await this.myOperationTypes.getOperationTypes();
  };

  async submit() {
    try {
     
      console.log(this.operation);
      await this.myOperationService.addOperation(this.operation);
      this.notify.success("Operation has been added.");
      this.myRouter.navigateByUrl(`/main`);

    } catch (error) {
      this.notify.error(error);
    }
      }
}



