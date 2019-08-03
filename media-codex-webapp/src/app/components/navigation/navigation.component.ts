import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  logged: boolean;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event.constructor.name === 'NavigationEnd') {
        this.logged = this.authService.status.authenticated;
      }
    });
  }

  logout() {
    this.authService.logout();
    console.info('Logged out');
    this.router.navigateByUrl('/');
  }
}
