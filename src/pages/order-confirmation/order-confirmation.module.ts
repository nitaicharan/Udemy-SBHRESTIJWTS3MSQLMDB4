import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PedidoService } from 'src/services/domain/pedido.service';
import { OrderConfirmationPageRoutingModule } from './order-confirmation-routing.module';
import { OrderConfirmationPage } from './order-confirmation.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderConfirmationPageRoutingModule
  ],
  declarations: [OrderConfirmationPage],
  providers: [PedidoService]
})
export class OrderConfirmationPageModule { }
