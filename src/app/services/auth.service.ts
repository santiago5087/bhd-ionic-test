import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators'

import { User } from '../models/user.model'
import { environment } from '../..//environments/environment'

let userInfo: User = {
  name: "José",
  lastName: "Pérez",
  photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
}

interface AuthResponse {
  access_token: string;
  refresh_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData = new Subject<User>();
  accessToken = '';
  refreshToken = '';
  isAuthenticated = false;
  apiURL = environment.apiURL;

  constructor(
    private http: HttpClient
  ) { }
  
  useTokens(accessToken: string, refreshToken: string): void {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.isAuthenticated = true;
  }

  storeTokens(accessToken: string, refreshToken: string): void {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    this.useTokens(accessToken, refreshToken);
  }

  signIn(userId: string, password: string, rememberUser: boolean) {
    if (rememberUser) {
      localStorage.setItem('userId', userId);
    } else {
      localStorage.removeItem('userId');
    }

    return this.http.post(`${this.apiURL}/sign_in`, { userId, password })
      .pipe(map((res: AuthResponse) => {
        this.storeTokens(res.access_token, res.refresh_token);
        this.getUserData();
        return { "success": true }
      }));
  }
  
  sendUserData(userData: User): void {
    this.userData.next(userData);
  }

  clearUserData(): void {
    this.userData.next(null);
  }

  storeUserData(userData: User): void {
    localStorage.setItem('userData', JSON.stringify(userData));
    this.sendUserData(userData);;
  }

  getUserData(): void {
    /* Endpoint no funciona */
    /*
    this.http.get<User>(`${this.apiURL}/na`)
      .subscribe(user => {
        console.log("User data", user);
        this.storeUserData(user);
      });
    */
   this.storeUserData(userInfo);
  }

  loadUserCredentials(): void {
    const userData: User = JSON.parse(localStorage.getItem('userData'));
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    if (userData && userData.name) {
      this.sendUserData(userData);
      if (accessToken && refreshToken) {
        this.useTokens(accessToken, refreshToken);
      }
    }
  }
  
  logout(): void {
    this.isAuthenticated = false;
    this.clearUserData();
    this.accessToken = null;
    this.refreshToken = null;
    localStorage.removeItem('userData');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  isLogged(): boolean {
    return this.isAuthenticated;
  }

  getAccessToken(): string {
    return this.accessToken;
  }

  getUserObservable() {
    return this.userData.asObservable();
  }

}
