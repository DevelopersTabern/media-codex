import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  title: 'app';

  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  password: string;

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  register(
    userName: string,
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    password: string) {

    const userBody = { 
      userName: userName,
      firstName: firstName,
      lastName: lastName,
      email: email,
      address: address,
      password: password };

    this.httpClient.post('http://localhost:27100/media', userBody).subscribe((response: any) => {
      this.router.navigate(['app/medias-list'])
      
    });

  }
}
