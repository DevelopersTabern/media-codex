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
  loading: boolean;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.loading = false;
  }

  ngOnInit() {
  }

  authenticate(email: string, password: string) {
    const userBody = { email: email, password: password };
    this.loading = true;

    this.httpClient.post('http://localhost:27100/auth', userBody).subscribe((response: any) => {
      if (response.token) {
        this.token = response.token;
        this.router.navigate(['app/medias-list']);
      }
      else {
        this.error = 'Usuario y/o contraseña invalidos';
        this.loading = false;
      }
    }, (err) => {
      this.error = 'Error al comunicarse con el servidor';
      this.loading = false;
    });
  }
}
