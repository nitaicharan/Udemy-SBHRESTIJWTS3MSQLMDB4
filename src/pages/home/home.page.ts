import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { take, tap } from 'rxjs/operators';
import { CredenciaisDTO } from './../../models/credenciais.dto';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  form: FormGroup;

  constructor(
    public router: Router,
    public service: AuthService,
    public formBuilder: FormBuilder,
    public menuController: MenuController,
  ) {
    this.form = formBuilder.group({
      email: [null],
      senha: [null],
    });
  }

  ionViewWillEnter() {
    this.menuController.enable(false);
  }

  ionViewDidLeave() {
    this.menuController.enable(true);
  }

  ionViewDidEnter() {
    this.service.refreshToken().pipe(
      tap(response => {
        this.service.successfulLogin(response.headers.get('Authorization'));
        this.router.navigateByUrl('categorias');
      }),
      take(1),
    ).subscribe();
  }

  get credenciais(): CredenciaisDTO {
    return this.form.value;
  }

  login() {
    this.service.authenticate(this.credenciais).pipe(
      tap(response => {
        this.service.successfulLogin(response.headers.get('Authorization'));
        this.router.navigateByUrl('categorias');
      })
    ).subscribe();
  }
}
