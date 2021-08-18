import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment'

import { Account } from '../models/account.model'
import { CreditCard } from '../models/credit-card.model'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURL = environment.apiURL + '/products';

  constructor(
    private http: HttpClient
  ) { }

  getAccounts() {
    return this.http.get<Account[]>(`${this.apiURL}/accounts`);
  }

  getCreditCards() {
    return this.http.get<CreditCard[]>(`${this.apiURL}/credit_cards`);
  }

  getAccountById(number: string) {
    return this.http.get<Account[]>(`${this.apiURL}/accounts`)
      .pipe(map(accounts => {
        let account = accounts.filter(acc => acc.number === number);
        return account[0];
      }));
  }

  getCreditCardById(number: string) {
    return this.http.get<CreditCard[]>(`${this.apiURL}/credit_cards`)
      .pipe(map(creditCards => {
        let creditCard = creditCards.filter(cc => cc.number === number);
        return creditCard[0];
      }));
  }

}
