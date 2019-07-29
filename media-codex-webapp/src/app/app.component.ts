import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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

  getMedias() {
    const body = {
      id: 'es_Es',
      name: 'Español',
      token: this.token
    };

    this.httpClient.post('http://localhost:27100/waifus', body).subscribe(response => console.log(response));
  }

  getFalseMedias() {
    const body = {
      id: 'es_Es',
      name: 'Español',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhhbnNOIiwicGFzc3dvcmQiOjEyMzQ1NiwiaWF0IjoxNTYzMjk4NDYzfQ.UJ5Ml3FO3hW_dOq6BkiPEGpoC67n-_77ec3yeOy49qw'
    };

    this.httpClient.post('http://localhost:27100/waifus', body).subscribe(response => console.log(response));
  }
}
