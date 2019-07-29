import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'app';
  token: string;

  email: string;
  password: string;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }
  
  authenticate(email: string, password: string) {
    const userAuth = { email: email, password: password };

    this.httpClient.post('http://localhost:27100/auth', userAuth).subscribe((response: any) => {
      this.token = response.token
    });
  }
}
