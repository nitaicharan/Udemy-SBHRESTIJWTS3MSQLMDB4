import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take, tap } from 'rxjs/operators';
import { CidadeDTO } from 'src/models/cidade.dto';
import { EstadoDTO } from 'src/models/estado.dto';
import { CidadeService } from 'src/services/domain/cidade.service';
import { EstadoService } from 'src/services/domain/estado.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage {
  formGroup: FormGroup;
  estados: EstadoDTO[];
  cidades: CidadeDTO[];

  constructor(
    formBuilder: FormBuilder,
    public cidadeService: CidadeService,
    public estadoService: EstadoService,
  ) {
    this.formGroup = formBuilder.group({
      nome: ['Joaquim', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      email: ['joaquim@gmail.com', [Validators.required, Validators.email]],
      tipo: ['1', [Validators.required]],
      cpfOuCnpj: ['06134596280', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      senha: ['123', [Validators.required]],
      logradouro: ['Rua Via', [Validators.required]],
      numero: ['25', [Validators.required]],
      complemento: ['Apto 3', []],
      bairro: ['Copacabana', []],
      cep: ['10828333', [Validators.required]],
      telefone1: ['977261827', [Validators.required]],
      telefone2: ['', []],
      telefone3: ['', []],
      estadoId: [null, [Validators.required]],
      cidadeId: [null, [Validators.required]]
    });

    this.estadoService.findAll().pipe(
      tap(response => {
        this.estados = response;
        this.formGroup.controls.estadoId.setValue(this.estados[0].id);
        this.updateCidades();
      }),
      take(1),
    ).subscribe();
  }

  updateCidades() {
    const estadoId = this.formGroup.value.estadoId;
    this.cidadeService.findAll(estadoId).pipe(
      tap(response => {
        this.cidades = response;
        this.formGroup.controls.cidadeId.setValue(null);
      }),
      take(1),
    ).subscribe();
  }

  signupUser() {
    console.log('enviou o form');
  }
}
