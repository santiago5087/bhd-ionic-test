import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  pages = [
    {
      title: 'Mis productos',
      url: '/tabs/mis-productos',
      icon: 'assets/images/icon_my_products_green.svg'
    },
    {
      title: 'Transacciones',
      url: '/tabs/transacciones',
      icon: 'assets/images/icon_transactions_green.svg'
    },
    {
      title: 'Ofertas',
      url: '/tabs/ofertas',
      icon: 'assets/images/icon_offers_green.svg'
    },
    {
      title: 'Configuración',
      url: '/tabs/configuracion',
      icon: 'assets/images/icon_config_green.svg'
    },
    {
      title: 'Contacto',
      url: '/contacto',
      icon: 'assets/images/icon_contact.svg'
    },
    {
      title: 'Sucursales',
      url: '/sucursales',
      icon: 'assets/images/icon_branches.svg'
    }
  ];

  selectedPath = '';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
