import { ItemPedidoDTO } from './item-pedido.dto';
import { PagamentoDTO } from './pagamento.dto';
import { RefDTO } from './ref.dto';

export interface PedidoDTO {
    cliente: RefDTO;
    itens: ItemPedidoDTO[];
    pagamento: PagamentoDTO;
    enderecoDeEntrega: RefDTO;
}
