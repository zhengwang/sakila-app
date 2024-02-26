import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClrCheckboxModule, ClrInputModule, ClrPasswordModule, ClrSelectModule } from '@clr/angular';
import { Layout } from './layout';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    Layout,
    ClrCheckboxModule,
    ClrInputModule,
    ClrPasswordModule,
    ClrSelectModule,
    CommonModule,
    RouterModule,
    FormsModule],
  template: `
    <Authlayout>
      <form>
        <div class="login-group">
          <clr-select-container>
            <label>User Role</label>
            <select clrSelect name="type" [(ngModel)]="form.type">
              <option value="tech">Technician</option>
              <option value="admin">Administrator</option>
            </select>
          </clr-select-container>
          <clr-input-container>
            <label class="clr-sr-only">E-mail</label>
            <input type="text" autocomplete="email" name="email" clrInput placeholder="Enter e-mail" [(ngModel)]="form.email"/>
          </clr-input-container>
          <clr-password-container>
            <label class="clr-sr-only">Password</label>
            <input type="password" autocomplete="current-password" placeholder="Password" name="password" clrPassword [(ngModel)]="form.password" />
          </clr-password-container>
          <clr-checkbox-wrapper>
            <label>Remember me</label>
            <input type="checkbox" name="rememberMe" clrCheckbox [(ngModel)]="form.remember" />
          </clr-checkbox-wrapper>

          <button type="submit" class="btn btn-primary">Log in</button>
          <a class="signup-link" [routerLink]="['signup']">Sign up for an account</a>
        </div>
      </form>
    </Authlayout>
  `,
  styles: `form {width: -webkit-fill-available;} .signup-link {text-align: center}`
})
export class Login {
  form = {
    type: '',
    email: '',
    password: '',
    remember: false
  };
}
