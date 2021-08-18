import { Component } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  }

  constructor() { }

}
