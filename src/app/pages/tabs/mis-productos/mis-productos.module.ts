import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { MisProductosPageRoutingModule } from './mis-productos-routing.module'
import { PipesModule } from '../../../pipes/pipes.module'
import { MisProductosService } from './mis-productos.service'

import { MisProductosPage } from './mis-productos.page'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisProductosPageRoutingModule,
    PipesModule
  ],
  declarations: [MisProductosPage],
  providers: [
    MisProductosService
  ]
})
export class MisProductosPageModule {}
