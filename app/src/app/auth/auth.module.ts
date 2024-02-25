import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard } from './dashboard';
import { routes } from './auth.routes';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { Index } from '.';



@NgModule({
  declarations: [
    Dashboard,
    Index
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
