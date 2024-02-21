import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClarityModule, ClrDatagridModule } from '@clr/angular';
import { SharedModule } from '../shared/shared.module';
import { Index } from './index/index';



@NgModule({
  declarations: [
    Index
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClrDatagridModule,
  ],
  exports: [
    Index
  ]
})
export class DashboardModule { }
