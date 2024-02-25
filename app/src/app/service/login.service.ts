import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface ICredential {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(credential: ICredential) {
    this.httpClient.post<ICredential>('/auth/login',  credential).subscribe(response => console.log(response));
  }
}
