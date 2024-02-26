import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { Index } from '.';



@NgModule({
  declarations: [
    Index
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class IndexModule { }
