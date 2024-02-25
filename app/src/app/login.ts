import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityIcons, angleIcon } from '@cds/core/icon';
import { ClrCheckboxModule, ClrDropdownModule, ClrInputModule, ClrPasswordModule, ClrSelectModule } from '@clr/angular';
import { CsrfService } from './service/csrf.service';
import { LoginService } from './service/login.service';

ClarityIcons.addIcons(angleIcon);

@Component({
  selector: 'app-login',
  standalone: true,
  providers: [CsrfService, LoginService],
  imports: [
    ClrCheckboxModule,
    ClrDropdownModule,
    ClrInputModule,
    ClrPasswordModule,
    ClrSelectModule,
    FormsModule,
    ReactiveFormsModule],
  template: `
    <div class="login-wrapper">
      <form class="login" #f="ngForm" (ngSubmit)="onSubmit(f.value)">
        <div class="login-header">
          <div class="logo"></div>
          <div class="actions">
            <clr-dropdown>
              <button class="btn btn-link btn-sm" clrDropdownTrigger>
                Language
                <cds-icon shape="angle"></cds-icon>
              </button>
              <clr-dropdown-menu>
                <div aria-label="english" clrDropdownItem>English</div>
              </clr-dropdown-menu>
            </clr-dropdown>
          </div>
        </div>
        <div class="login-body">
          <section class="title">
            <div class="welcome">Welcome to</div>
            Sakila
            <div class="hint">Film Inventory System</div>
          </section>
          <div class="login-group">
            <clr-select-container>
              <label>User Role</label>
              <select clrSelect name="type" [(ngModel)]="form.type">
                <option value='technician'>Technician</option>
                <option value='admin'>Administrator</option>
              </select>
            </clr-select-container>
            <clr-input-container>
              <label class="clr-sr-only">E-mail</label>
              <input type='text' autocomplete="email" name="email" clrInput placeholder="Enter e-mail" [(ngModel)]="form.email" required/>
            </clr-input-container>
            <clr-password-container>
              <label class="clr-sr-only">Password</label>
              <input type="password" autocomplete="current-password" name="password" clrPassword placeholder="Enter password" [(ngModel)]="form.password" required/>
            </clr-password-container>
            <clr-checkbox-wrapper>
              <label>Remember me</label>
              <input type="checkbox" name="remember" clrCheckbox [(ngModel)]="form.remember"/>
            </clr-checkbox-wrapper>
            <div class="error active">Invalid user name or password</div>
            <button class="btn btn-primary" type="submit">Log in</button>
            <a href="javascript://" class="signup">Sign up for an account</a>
          </div>
        </div>
        <div class="login-footer">
          <span class="copyright">2023 Sakila, Inc</span>
          <a href="#">Terms</a>
          <a>Privacy</a>
          <a>Mississauga Privacy Rights</a>
        </div>
      </form>
    </div>
  `,
  styles: `.login-wrapper {background: url('https://source.unsplash.com/assorted-books-on-black-wooden-shelf-8x_ai30Rd0M'); background-repeat: no-repeat;background-size: cover}`
})
export class Login {
  form = {
    type: '',
    email: '',
    password: '',
    remember: false
  };

  constructor(private csrfSvc: CsrfService, private loginSvc: LoginService) {}

  onSubmit(formData: any) {
    console.log(formData);
    this.loginSvc.login(formData);
  }
}
