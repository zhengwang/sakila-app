import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClrIconModule, ClrVerticalNavModule } from '@clr/angular';
import { Header } from './header/header';
import { Layout } from './layout/layout';
import { Navbar } from './navbar/navbar';
import { Sidebar } from './sidebar/sidebar';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Navbar,
    Layout,
    Header,
    Sidebar
  ],
  imports: [
    CommonModule,
    ClrVerticalNavModule,
    ClrIconModule,
    RouterModule
  ],
  exports: [Layout]
})
export class SharedModule { }
