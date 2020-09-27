import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { PedidoDTO } from 'src/models/pedido.dto';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage {
  pedido: PedidoDTO;
  formGroup: FormGroup;
  parcelas = [...Array(10).keys()];

  constructor(
    private router: Router,
    formBuilder: FormBuilder,
  ) {
    this.pedido = this.router.getCurrentNavigation().extras.state.pedido;

    this.formGroup = formBuilder.group({
      numeroDeParcelas: [1, [Validators.required]],
      '@type': ['pagamentoComCartao', [Validators.required]]
    });
  }

  nextPage() {
    this.pedido.pagamento = this.formGroup.value;
    const navigationExtras: NavigationExtras = { state: { pedido: this.pedido } };

    this.router.navigate(['/order-confirmation'], navigationExtras);
  }
}
