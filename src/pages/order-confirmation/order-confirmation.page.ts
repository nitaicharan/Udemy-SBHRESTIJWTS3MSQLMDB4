import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CartItem } from 'src/models/cart.item';
import { ClienteDTO } from 'src/models/cliente.dto';
import { PedidoDTO } from 'src/models/pedido.dto';
import { CartService } from 'src/services/cart.service';
import { ClienteService } from 'src/services/domain/cliente.service';
import { PedidoService } from 'src/services/domain/pedido.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.page.html',
  styleUrls: ['./order-confirmation.page.scss'],
})
export class OrderConfirmationPage {
  pedido: PedidoDTO;
  cartItems: CartItem[];
  cliente$: Observable<ClienteDTO>;

  constructor(
    private router: Router,
    clienteService: ClienteService,
    private cartService: CartService,
    private pedidoService: PedidoService,
  ) {
    this.pedido = this.router.getCurrentNavigation().extras.state.pedido;

    this.cartItems = this.cartService.getCart().items;
    clienteService.findById(this.pedido.cliente.id);
  }

  findEndereco(client: ClienteDTO) {
    const id = this.pedido.enderecoDeEntrega.id;
    const list = client['enderecos'];

    const position = list.findIndex(x => x.id === id);
    return list[position];
  }

  total() {
    return this.cartService.total();
  }

  checkout() {
    this.pedidoService.insert(this.pedido).pipe(
      tap(response => this.cartService.createOrClearCart()),
      catchError(error => {
        if (error.status === 403) {
          return this.router.navigateByUrl('/');
        }
      })
    ).subscribe();
  }
}
