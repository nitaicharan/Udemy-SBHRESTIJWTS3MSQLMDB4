import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PedidoDTO } from '../../models/pedido.dto';
import { environment } from './../../environments/environment';

@Injectable()
export class PedidoService {
    constructor(public httpClient: HttpClient) { }

    insert = (pedidoDTO: PedidoDTO) => this.httpClient.post(
        `${environment.API_URL}/pedidos`,
        pedidoDTO,
        {
            observe: 'response',
            responseType: 'text'
        }
    )
}
