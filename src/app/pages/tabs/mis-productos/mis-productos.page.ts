import { Component, OnInit } from '@angular/core'

import { AuthService } from '../../../services/auth.service'
import { ProductsService } from '../../../services/products.service'
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
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.authService.loadUserCredentials();
    this.productsService.getAccounts().subscribe(accounts => {
      console.log("Accounts", accounts);
      this.accounts = accounts;
    });
    this.productsService.getCreditCards().subscribe(creditCards => {
      console.log("Credit Cards", creditCards);
      this.creditCards = creditCards;
    });
  }

}
