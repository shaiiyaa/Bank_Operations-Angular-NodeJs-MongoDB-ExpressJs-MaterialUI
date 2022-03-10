import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/layout-area/main/main.component';
import { AddOperationComponent } from './components/add-operation/add-operation.component';


const routes: Routes = [
  { path: "main", component: MainComponent },
  { path: "add", component: AddOperationComponent },
  { path: "", redirectTo: "/main", pathMatch: "full" }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
