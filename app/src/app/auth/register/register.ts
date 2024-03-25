import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  constructor(private authSvc: AuthService) { }

  onSubmit(value: any) {
    console.log(value);
    this.authSvc.register(value).subscribe(response => {
      console.log(response);
      const { status, token } = response;
      if (status == 'ok') {
        localStorage.setItem('apiToken', token);
      }
    });
  }
}
