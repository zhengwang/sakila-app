import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Index } from './index';
import { Film } from './film';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { Details } from './details';



@NgModule({
  declarations: [
    Index,
    Film,
    Details
  ],
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild(routes)
  ]
})
export class FilmModule { }
