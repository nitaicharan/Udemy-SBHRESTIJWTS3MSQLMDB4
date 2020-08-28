import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { CredenciaisDTO } from './../../models/credenciais.dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  form: FormGroup;

  constructor(
    public router: Router,
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

  get credenciais(): CredenciaisDTO {
    return this.form.value;
  }

  login() {
    console.log(this.credenciais);
    this.router.navigateByUrl('categorias');
  }
}
