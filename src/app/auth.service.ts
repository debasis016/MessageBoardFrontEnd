import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Router } from '@angular/router'

@Injectable()

export class AuthService {

  BASE_URL = 'http://localhost:63521/auth';
  NAME_KEY = 'name';
  TOKEN_KEY = 'token';
  constructor(private http: Http, private router: Router) { }

  get name() {
    return localStorage.getItem(this.NAME_KEY);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  register(user: any) {
    delete user.confirmPassword;

    this.http.post(this.BASE_URL + '/register', user).subscribe(res => {

      let authResponse = res.json();
      if (!authResponse) {
        return;
      }
      localStorage.setItem(this.TOKEN_KEY, res.json().token)
      localStorage.setItem(this.NAME_KEY, res.json().firstName)
      this.router.navigate(['/']);
    });
  }

  logout() {
    localStorage.removeItem(this.NAME_KEY);
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
