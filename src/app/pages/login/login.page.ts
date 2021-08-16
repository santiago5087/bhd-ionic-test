import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms/'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  createForm(): void {
    let userId = localStorage.getItem('userId');
    this.loginForm = this.formBuilder.group({
      user: [userId ? userId : '', [Validators.required, Validators.minLength(8)]]
    })
  }

}
