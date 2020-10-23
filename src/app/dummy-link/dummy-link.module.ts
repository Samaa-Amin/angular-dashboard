import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DummyLinkRoutingModule } from './dummy-link-routing.module';
import { DummyLinkComponent } from './dummy-link.component';


@NgModule({
  declarations: [DummyLinkComponent],
  imports: [
    CommonModule,
    DummyLinkRoutingModule
  ]
})
export class DummyLinkModule { }
