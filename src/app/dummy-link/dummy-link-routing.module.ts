import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DummyComponentComponent } from '../dummy-component/dummy-component.component';

import { DummyLinkComponent } from './dummy-link.component';

const routes: Routes = [{ path: '', component: DummyLinkComponent ,
children: [
  { path: "dumy", component: DummyComponentComponent},
]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DummyLinkRoutingModule { }
