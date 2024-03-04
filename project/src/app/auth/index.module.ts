import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Index } from '.';
import { routes } from './routes';
import { LoginService } from '../service/login.service';



@NgModule({
  declarations: [
    Index
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    { provide: LoginService }
  ]
})
export class IndexModule { }
