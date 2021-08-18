import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router';

import { Account } from '../../models/account.model'
import { CreditCard } from '../../models/credit-card.model'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {

  @Input() product: Account | CreditCard;
  @Input() index: number;
  @Input() routeLink: string;

  constructor(private router: Router) { }

  ngOnInit() {}

  goToDetails() {
    console.log("Vamos a detalles!")
  }

}
