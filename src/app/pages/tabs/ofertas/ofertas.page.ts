import { Component, OnInit } from '@angular/core'

import { AuthService } from '../../../services/auth.service'

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.loadUserCredentials();
  }

}
