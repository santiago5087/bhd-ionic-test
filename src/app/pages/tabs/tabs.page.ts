import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  tabs = [
    {
      tab: 'mis-productos',
      icon: 'speedmeter',
      label: 'Mis productos'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
