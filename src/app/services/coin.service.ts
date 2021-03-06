import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CoinService {

  coinEndpoint = environment.BRAVE_NEW_COIN_SERVICE;

  constructor(private http: HttpClient) { }

  getCoins() {
    return this.http.get<any>(`${this.coinEndpoint}/prices?coin=btc`, {});
  }

  convert(qlt: number, from: string, to: string) {
    return this.http.get<any>(`${this.coinEndpoint}/convert?qty=${qlt}&from=${from}&to=${to}`);
  }
}
