import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { ProductDetailPageRoutingModule } from './product-detail-routing.module'
import { ProductDetailPage } from './product-detail.page'
import { ProductCardModule } from '../../components/product-card/product-card.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailPageRoutingModule,
    ProductCardModule
  ],
  declarations: [
    ProductDetailPage
  ]
})
export class ProductDetailPageModule {}
