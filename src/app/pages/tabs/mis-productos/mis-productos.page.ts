import { Component, OnInit } from '@angular/core'

import { AuthService } from '../../../services/auth.service'
import { MisProductosService } from './mis-productos.service'
import { Account } from '../../../models/account.model'
import { CreditCard } from '../../../models/credit-card.model'

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.page.html',
  styleUrls: ['./mis-productos.page.scss'],
})
export class MisProductosPage implements OnInit {

  accounts: Account[] = [];
  creditCards: CreditCard[] = [];

  constructor(
    private authService: AuthService,
    private misProductosService: MisProductosService
  ) { }

  ngOnInit() {
    this.authService.loadUserCredentials();
    this.misProductosService.getAccounts().subscribe(accounts => {
      console.log("Accounts", accounts);
      this.accounts = accounts;
    });
    this.misProductosService.getCreditCards().subscribe(creditCards => {
      console.log("Credit Cards", creditCards);
      this.creditCards = creditCards;
    });
  }

}
