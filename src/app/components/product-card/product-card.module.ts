import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ProductCardComponent } from './product-card.component'
import { IonicModule } from '@ionic/angular'
import { RouterModule } from '@angular/router'
import { PipesModule } from 'src/app/pipes/pipes.module'

@NgModule({
  declarations: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    PipesModule
  ],
  exports: [ProductCardComponent]
})
export class ProductCardModule { }
