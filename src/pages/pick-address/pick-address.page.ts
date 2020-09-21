import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ClienteDTO } from 'src/models/cliente.dto';
import { ClienteService } from 'src/services/domain/cliente.service';
import { EnderecoDTO } from './../../models/endereco.dto';
import { StorageService } from './../../services/storage.service';

@Component({
  selector: 'app-pick-address',
  templateUrl: './pick-address.page.html',
  styleUrls: ['./pick-address.page.scss'],
})
export class PickAddressPage {
  items$: Observable<EnderecoDTO[]>;

  constructor(
    router: Router,
    storageService: StorageService,
    clienteService: ClienteService,
  ) {

    const localUser = storageService.getLocalUser();
    if (localUser && localUser.email) {
      this.items$ = clienteService.findByEmail(localUser.email).pipe(
        map((cliente: ClienteDTO) => cliente['enderecos']),
        take(1),
      );
    }
    else router.navigateByUrl('/');
  }
}
