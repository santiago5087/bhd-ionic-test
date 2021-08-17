import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leadingZeros'
})
export class LeadingZerosPipe implements PipeTransform {

  transform(value: number, leadingZeros: number): string {
    
    return String(value).padStart(leadingZeros, '0');
  }

}
