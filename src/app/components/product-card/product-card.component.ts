import { Component, Input } from '@angular/core'

import { Account } from '../../models/account.model'
import { CreditCard } from '../../models/credit-card.model'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {

  @Input() product: Account | CreditCard;
  @Input() index: number;
  @Input() routeLink: string;

  constructor() { }

}
