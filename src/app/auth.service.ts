import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
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

  get tokenHeader() {
    let header = new Headers({'Authorization': 'Bearer' + localStorage.getItem(this.TOKEN_KEY)});
    return new RequestOptions({headers: header});
  }

  login(loginData: any) {
    this.http.post(this.BASE_URL + '/login', loginData).subscribe(res => {
      this.authenticate(res);
    });
  }

  register(user: any) {
    delete user.confirmPassword;

    this.http.post(this.BASE_URL + '/register', user).subscribe(res => {
    this.authenticate(res);
    });
  }

  logout() {
    localStorage.removeItem(this.NAME_KEY);
    localStorage.removeItem(this.TOKEN_KEY);
  }

  authenticate(res: any) {
    let authResponse = res.json();
      if (!authResponse) {
        return;
      }
      localStorage.setItem(this.TOKEN_KEY, res.json().token)
      localStorage.setItem(this.NAME_KEY, res.json().firstName)
      this.router.navigate(['/']);
  }
}
