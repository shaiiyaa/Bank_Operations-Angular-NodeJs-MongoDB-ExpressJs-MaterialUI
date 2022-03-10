import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import OperationTypesModel from '../models/operation.types.model';

@Injectable({
  providedIn: 'root'
})
export class OperationTypesService {

  constructor(private http: HttpClient) { }

  // Get Operation By Account: 
  public async getOperationTypes() {

    const product = await this.http.get<OperationTypesModel[]>(environment.operationTypesUrl).toPromise();
    return product;
  };
}
