import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClrTabsModule } from '@clr/angular';
import { SharedModule } from '../shared/shared.module';
import { Index } from './index/index';



@NgModule({
  declarations: [
    Index
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClrTabsModule
  ],
  exports: [
    Index
  ]
})
export class DashboardModule { }
