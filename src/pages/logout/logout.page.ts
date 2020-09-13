import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage {
  constructor(
    private router: Router,
    private service: AuthService,
  ) {
    this.service.logout();
    this.router.navigateByUrl('/');
  }
}
