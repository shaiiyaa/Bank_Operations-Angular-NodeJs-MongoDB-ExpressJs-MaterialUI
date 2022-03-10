import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import OperationModel from '../models/operation.model';
import { OperationTypesService } from './operation-types.service';

@Injectable({
  providedIn: 'root'
})
export class BankOperationsService {

  constructor(private http: HttpClient) { }

  // Get Operation By Account: 
  public async getOperation(account: number) {
    const operation = await this.http.get<OperationModel[]>(environment.operationsUrl + account).toPromise();
    return operation;
  };
  
  // Get All Operation: 
  public async getAllOperations() {
      const operation = await this.http.get<OperationModel[]>(environment.operationsUrl).toPromise();
    return operation;
  };

  //add operation
  public async addOperation(operation: OperationModel) {

    const myFormData: FormData = OperationModel.convertToFormData(operation);
    const addedOperation = await this.http.post<OperationModel>(environment.operationsUrl, myFormData).toPromise();
    return addedOperation;
  };
}
