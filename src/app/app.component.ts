import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core'

import { Platform } from '@ionic/angular'
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'
import { Router, RouterEvent } from '@angular/router'
import { Subscription } from 'rxjs'

import { AuthService } from './services/auth.service'
import { User } from './models/user.model'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges {

  user: User;
  subscription: Subscription;
  
  pages = [];

  pagesAuth = [
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

  pagesNoAuth = [
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
  ]

  selectedPath = '';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private authService: AuthService
  ) {
    this.initializeApp();
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });

    this.authService.loadUserCredentials();
    this.subscription = this.authService.getUserObservable().subscribe(user => {
        this.user = user;
        console.log("USER", this.user)
        this.user
        ? this.pages = this.pagesAuth
        : this.pages = this.pagesNoAuth;
      });
  }

  ngOnInit() {
    this.user
    ? this.pages = this.pagesAuth
    : this.pages = this.pagesNoAuth;
  }

  ngOnChanges() {
    this.user
    ? this.pages = this.pagesAuth
    : this.pages = this.pagesNoAuth;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
