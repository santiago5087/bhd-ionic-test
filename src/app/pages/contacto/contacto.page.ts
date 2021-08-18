import { Component, OnInit } from '@angular/core'

import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.loadUserCredentials();
  }

}
