import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INewuser } from '../dto/inewuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  register(payload: INewuser) {
    return this.httpClient.post<any>('/auth/register', payload);
  }
}
