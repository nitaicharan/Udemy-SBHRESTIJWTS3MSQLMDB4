import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.page.html',
  styleUrls: ['./log-out.page.scss'],
})
export class LogOutPage {
  constructor(
    private router: Router,
    private service: AuthService,
  ) {
    this.service.logout();
    this.router.navigateByUrl('/');
  }
}
