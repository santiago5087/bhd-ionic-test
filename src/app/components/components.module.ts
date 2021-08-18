import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { RouterModule } from '@angular/router'

import { PipesModule } from '../pipes/pipes.module'
import { ProductCardComponent } from './product-card/product-card.component'

@NgModule({
  declarations: [
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    PipesModule
  ],
  exports: [
    ProductCardComponent,
  ]
})
export class ComponentsModule { }
