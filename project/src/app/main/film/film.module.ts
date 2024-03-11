import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Index } from './index';
import { Film } from './film';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { Details } from './details';
import { EditableText } from '../../shared/editable-text';



@NgModule({
  declarations: [
    Index,
    Film,
    Details
  ],
  imports: [
    CommonModule,
    ClarityModule,
    EditableText,
    RouterModule.forChild(routes)
  ]
})
export class FilmModule { }
