import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { DummyComponentComponent } from './dummy-component/dummy-component.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';

const routes: Routes = [
  { path: "", component: DashBoardComponent },
  { path: "dashBoard", component: DashBoardComponent,
  children: [
    { path: "addEmployee", component: AddEmployeeComponent },
    { path: "searchEmployee", component: SearchEmployeeComponent },

  ] },
  { path: "dumy", component: DummyComponentComponent},
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
