import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClrIconModule, ClrVerticalNavModule } from '@clr/angular';
import { Header } from './header/header';
import { Layout } from './layout/layout';
import { Navbar } from './navbar/navbar';
import { Sidebar } from './sidebar/sidebar';



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
    ClrIconModule
  ],
  exports: [Layout]
})
export class SharedModule { }
