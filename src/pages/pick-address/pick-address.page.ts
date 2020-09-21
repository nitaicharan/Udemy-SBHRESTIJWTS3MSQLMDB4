import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { ClienteDTO } from 'src/models/cliente.dto';
import { ClienteService } from 'src/services/domain/cliente.service';
import { EnderecoDTO } from './../../models/endereco.dto';
import { PedidoDTO } from './../../models/pedido.dto';
import { CartService } from './../../services/cart.service';
import { StorageService } from './../../services/storage.service';

@Component({
  selector: 'app-pick-address',
  templateUrl: './pick-address.page.html',
  styleUrls: ['./pick-address.page.scss'],
})
export class PickAddressPage {
  items$: Observable<EnderecoDTO[]>;
  pedido: PedidoDTO;

  constructor(
    router: Router,
    cartService: CartService,
    storageService: StorageService,
    clienteService: ClienteService,
  ) {

    const localUser = storageService.getLocalUser();
    if (localUser && localUser.email) {
      this.items$ = clienteService.findByEmail(localUser.email).pipe(
        tap((cliente: ClienteDTO) => {
          const cart = cartService.getCart();
          this.pedido = {
            pagamento: null,
            enderecoDeEntrega: null,
            cliente: { id: cliente['id'] },
            itens: cart.items.map(i => ({ quantidade: i.quantidade, produto: { id: i.produto.id } }))
          };
        }),
        map((cliente: ClienteDTO) => cliente['enderecos']),
        take(1),
      );
    }
    else router.navigateByUrl('/');
  }

  nextPage(item: EnderecoDTO) {
    this.pedido.enderecoDeEntrega = { id: item.id };
    console.log(this.pedido);
  }
}
