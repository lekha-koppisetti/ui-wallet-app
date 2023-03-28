import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletServiceService {


  apiUrl = 'https://wallet-service-txho7xwdwq-el.a.run.app';

  constructor(private http: HttpClient) { }

  addWallet(wallet: object) {
    return this.http.post(`${this.apiUrl}/setup`, wallet);
  }

  getWallet() {
    return this.http.get(`${this.apiUrl}/users`);
  }
}
