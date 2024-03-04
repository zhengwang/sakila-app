import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(credential) {
    return this.httpClient.post('/auth/login', credential);
  }
}
