import { Injectable } from '@angular/core'
import { Router, CanLoad, CanActivate } from '@angular/router'

import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanLoad, CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canLoad() {
    if (!this.authService.isLogged()) {
      this.router.navigateByUrl('login');
      return false;
    }
    return true;
  }

  canActivate() {
    if (this.authService.isLogged()) {
      this.router.navigateByUrl('/tabs/mis-productos');
      return false;
    }
    return true;
  }

}
