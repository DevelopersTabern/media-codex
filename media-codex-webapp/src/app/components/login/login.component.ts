import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private authService: AuthService, private router: Router) {
    this.loading = false;
  }

  ngOnInit() {
  }

  authenticate(email: string, password: string) {
    this.loading = true;

    this.authService.login(email, password).subscribe((authenticated: boolean) => {
      if (authenticated) {
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
