import { Component, OnInit } from '@angular/core'

import { AuthService } from '../../../services/auth.service'

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.loadUserCredentials();
  }

}
