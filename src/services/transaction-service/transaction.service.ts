import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  apiUrl = 'https://wallet-service-txho7xwdwq-el.a.run.app';

  constructor(private http: HttpClient) { }

  addTransaction(walletId: string, transaction : any) {
    return this.http.post(`${this.apiUrl}/transact/${walletId}`, transaction);
  }

  getTransactions(walletId: string, skip : number , limit: number, order: string) : Observable<any> {
    return this.http.get(`${this.apiUrl}/transactions/${walletId}?skip=${skip}&limit=${limit}&orderBy=${order}`);
  }
}
