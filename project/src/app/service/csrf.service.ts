import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CsrfService {

  constructor(private httpClient: HttpClient) {
    console.log('initial csrd');
    this.httpClient.get<any>('/sanctum/csrf-cookie').subscribe(data => console.log(data));
  }
}
