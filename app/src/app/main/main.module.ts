import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Authlayout } from '../layout/authlayout/authlayout';
import { Dashboard } from './dashboard/dashboard';
import { Film } from './film/film';
import { Index } from './index';
import { routes } from './main.routes';

@NgModule({
  declarations: [Dashboard, Index, Film],
  imports: [
    Authlayout,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
