import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LeadingZerosPipe } from './leading-zeros.pipe'

@NgModule({
  declarations: [LeadingZerosPipe],
  imports: [
    CommonModule
  ],
  exports: [LeadingZerosPipe]
})
export class PipesModule { }
