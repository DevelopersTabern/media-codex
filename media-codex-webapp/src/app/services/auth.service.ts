import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  status: { token: string, authenticated: boolean };

  constructor(private httpClient: HttpClient) {
    this.status = {
      authenticated: false,
      token: null
    };

    this.status = localStorage.getItem('auth') ? JSON.parse(window.atob(localStorage.getItem('auth'))) : { ...this.status };
  }

  login(email: string, password: string) {
    const userBody = { email, password };

    return this.httpClient.post('http://localhost:27100/auth', userBody).pipe(map((response: any) => {

      this.status = {
        token: response.token,
        authenticated: response.token ? true : false
      };

      localStorage.setItem('auth', window.btoa(JSON.stringify(this.status)));
      return this.status.authenticated;
    }));
  }

  logout() {
    this.status = {
      authenticated: false,
      token: null
    };

    localStorage.clear();
  }
}
