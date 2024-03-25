import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { routes } from './auth.routes';
import { Header } from './component/header/header';
import { Index } from './index';
import { Login } from './login/login';
import { Register } from './register/register';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    Header,
    Login,
    Register,
    Index,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    { provide: AuthService }
  ]
})
export class AuthModule { }
