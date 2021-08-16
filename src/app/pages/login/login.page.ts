import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms/'

import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { 
    this.createForm();
  }

  ngOnInit() {
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
        console.log(err);
      });
  }

}
