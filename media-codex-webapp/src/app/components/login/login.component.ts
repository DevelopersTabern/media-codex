import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title: 'app';
  token: string;

  email: string;
  password: string;

  error: string;

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  authenticate(email: string, password: string) {
    const userBody = { email: email, password: password };

    this.httpClient.post('http://localhost:27100/auth', userBody).subscribe((response: any) => {
      if (response.token) {
        this.token = response.token;
        this.router.navigate(['app/medias-list']);
      }
      else {
        this.error = 'Usuario y/o contraseña invalidos';
      }
    }, (err) => this.error = 'Error al comunicarse con el servidor');

  }
}
