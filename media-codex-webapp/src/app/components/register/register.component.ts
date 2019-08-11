import { Component, OnInit,  } from '@angular/core';
import { User } from '../../models/User'

import { UsersService } from '../../services/users.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = {
    id:0,
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    password: ''
  };

  error: string;
  loading: boolean;

  constructor(private userService: UsersService, private router: Router) {
    this.loading = false;
  }
  
  ngOnInit() {
  }

  register(){
    this.loading = true;
    this.userService.saveUser(this.user).subscribe(res => {
      console.log(res);
      this.router.navigate(['app/medias-list']);

    },
    err => console.log(err)
    )
  }


 
}
