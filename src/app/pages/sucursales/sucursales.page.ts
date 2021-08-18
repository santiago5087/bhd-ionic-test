import { Component, OnInit } from '@angular/core'

import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.page.html',
  styleUrls: ['./sucursales.page.scss'],
})
export class SucursalesPage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.loadUserCredentials();
  }

}
