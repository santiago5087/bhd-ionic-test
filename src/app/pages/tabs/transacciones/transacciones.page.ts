import { Component, OnInit } from '@angular/core'

import { AuthService } from '../../../services/auth.service'

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.page.html',
  styleUrls: ['./transacciones.page.scss'],
})
export class TransaccionesPage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.loadUserCredentials();
  }

}
