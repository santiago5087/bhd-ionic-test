import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { ProductsService } from '../../services/products.service'
import { Account } from 'src/app/models/account.model'
import { CreditCard } from 'src/app/models/credit-card.model'


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  product: Account | CreditCard;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.type && params.number) {
      console.log(params);
      if (params.type === 'AC') {
        this.productsService.getAccountById(params.number)
          .subscribe(account => {
            this.product = account;
          });
      }
      else if (params.type === 'TC') {
        this.productsService.getCreditCardById(params.number)
          .subscribe(creditCard => {
            this.product = creditCard;
          });
      }
    }
  }

}
