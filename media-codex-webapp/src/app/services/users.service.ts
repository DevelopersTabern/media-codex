import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URI = 'http://localhost:27100';

  constructor(private http: HttpClient) { }

  saveUser(user: User){
    return this.http.post(`${this.API_URI}/user`, user);
  }
  
}
