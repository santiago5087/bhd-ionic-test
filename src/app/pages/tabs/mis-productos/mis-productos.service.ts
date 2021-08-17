import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Account } from '../../../models/account.model'
import { CreditCard } from '../../../models/credit-card.model'

@Injectable()
export class MisProductosService {

  private apiURL = 'https://bhdleonfrontend-test.herokuapp.com/products';

  constructor(
    private http: HttpClient
  ) { }

  getAccounts() {
    return this.http.get<Account[]>(`${this.apiURL}/accounts`);
  }

  getCreditCards() {
    return this.http.get<CreditCard[]>(`${this.apiURL}/credit_cards`);
  }

}
