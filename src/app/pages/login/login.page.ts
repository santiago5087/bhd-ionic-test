import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms/'

import { ToastController } from '@ionic/angular'

import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastController: ToastController
  ) { 
    this.createForm();
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'top',
      color: 'danger'
    });
    toast.present();
  }

  createForm(): void {
    let userId = localStorage.getItem('userId');
    this.loginForm = this.formBuilder.group({
      user: [userId ? userId : '', [Validators.required, Validators.minLength(8)]],
      password: ['', Validators.required],
      remember: [userId ? true : false]
    });
  }

  login(): void {
    let userCredentials = this.loginForm.value;
    console.log("LoginForm", userCredentials);
    this.authService
      .signIn(userCredentials['user'], userCredentials['password'], userCredentials['remember'])
      .subscribe(res => {
        if (res.success) {
          this.router.navigateByUrl('/tabs');
        }
      }, err => {
        // Mostrar error con el componente de ionic
        this.presentToast(err['error']['message']);
        console.log(err);
      });
  }

}
